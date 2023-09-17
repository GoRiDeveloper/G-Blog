import type { LoginType, RegisterResult, UserRepository } from "./user.types";
import type { User } from "./user.entity";
import { EntityFactory } from "../../services/factory/entities.factory";
import { uploadAndGetUrl } from "../../services/firebase/firebase.service";
import { comparePass, getToken } from "./plugins/encrypt.plugin";
import { ERROR_MESSAGES } from "../../constants/error.constants";
import { userDto } from "./user.dto";

export class UserService extends EntityFactory {
  //private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    //this.userRepository = userRepository;
    super(userRepository);
  }
  // Servicio para crear un usuario, subiendo la imagen de usuario si existe y creando el token de sesión.
  async createUser(
    userToCreate: User,
    file: Express.Multer.File | undefined
  ): Promise<RegisterResult> {
    if (file) {
      const profileImgUrl = await uploadAndGetUrl(file, "users");
      userToCreate.profileImgUrl = profileImgUrl;
    }
    const user = (await this.create(userToCreate, true)) as User;
    return {
      user,
      token: await getToken({ id: user.id }),
    };
  }
  // Servicio para verificar el email y password, y retornar el token con informacion de usuario.
  async signIn({ email, password }: LoginType): Promise<any> {
    const user = (await this.findOne(
      { email },
      false,
      false,
      { withDeleted: true },
      true,
      ERROR_MESSAGES.USER_NOT_EXISTS
    )) as User;
    const [, token] = await Promise.all([
      comparePass(password, user.password),
      getToken({ id: user.id }),
    ]);
    return {
      token,
      user: userDto(user),
    };
  }
}
