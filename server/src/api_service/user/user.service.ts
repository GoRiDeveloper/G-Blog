import type {
  LoginType,
  AuthResult,
  UserRepository,
  UpdatePasswordType,
  UserType,
} from "./user.types";
import type { User } from "./user.entity";
import { EntityFactory } from "../../services/factory/entities.factory";
import { uploadAndGetUrl } from "../../services/firebase/firebase.service";
import { comparePass } from "./plugins/encrypt.plugin";
import { getToken } from "../../plugins/token.plugin";
import { ERROR_MESSAGES } from "../../constants/error.constants";
import { userDto } from "./user.dto";

export class UserService {
  //private readonly userRepository: UserRepository;
  private readonly entityFactory: EntityFactory;

  constructor(userRepository: UserRepository) {
    //this.userRepository = userRepository;
    this.entityFactory = new EntityFactory(userRepository);
  }
  // Servicio para crear un usuario, subiendo la imagen de usuario si existe y creando el token de sesión.
  async createUser(
    userToCreate: User,
    file: Express.Multer.File | undefined
  ): Promise<AuthResult> {
    if (file) {
      // Función para subir la imagen y obtener la URL.
      const profileImgUrl = await uploadAndGetUrl(file, "users");
      userToCreate.profileImgUrl = profileImgUrl;
    }
    const user = (await this.entityFactory.create(userToCreate, true)) as User;
    return {
      token: await getToken({ id: user.id, role: user.role }),
      user: userDto(user),
    };
  }
  // Servicio para verificar el email y password, y retornar el token con informacion de usuario.
  async signIn({ email, password }: LoginType): Promise<AuthResult> {
    const user = (await this.entityFactory.findOne(
      { email },
      false,
      false,
      false,
      true,
      ERROR_MESSAGES.USER_NOT_EXISTS
    )) as User;
    const [, token] = await Promise.all([
      comparePass(password, user.password),
      getToken({ id: user.id, role: user.role }),
    ]);
    return {
      token,
      user: userDto(user),
    };
  }
  // Servicio para encontrar un usuario específico.
  async findUser(
    filters: object,
    attrs?: object | false,
    relations?: object | false,
    extras?: object | false,
    error?: boolean,
    errorMsg?: string
  ): Promise<User> {
    return (await this.entityFactory.findOne(
      filters,
      attrs,
      relations,
      extras,
      error,
      errorMsg
    )) as User;
  }
  // Servicio para actualizar tu contraseña actual.
  async updatePassword(
    { currentPassword, newPassword }: UpdatePasswordType,
    user: User
  ): Promise<void> {
    await comparePass(currentPassword, user.password);
    user.password = newPassword;
    user.passwordChangedAt = Date.now();
    await this.entityFactory.update(user, true);
  }
  // Servicio para actualizar información del usuario en sesión.
  async updateUserInfo(id: number, data: UserType): Promise<void> {
    if (!data) return;
    const userToUpdate = {
      id,
      ...data,
    };
    await this.entityFactory.update(userToUpdate, false);
  }
}
