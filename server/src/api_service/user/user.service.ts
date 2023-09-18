import type { LoginType, AuthResult, UserRepository } from "./user.types";
import type { User } from "./user.entity";
import { EntityFactory } from "../../services/factory/entities.factory";
import { uploadAndGetUrl } from "../../services/firebase/firebase.service";
import { comparePass, getToken } from "./plugins/encrypt.plugin";
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
}
