import type { LoginType, RegisterResult, UserRepository } from "./user.types";
import type { User } from "./user.entity";
import { EntityFactory } from "../../services/factory/entities.factory";
import { uploadAndGetUrl } from "../../services/firebase/firebase.service";
import { generateJWT } from "../../utils/jwt";

export class UserService extends EntityFactory {
  //private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    //this.userRepository = userRepository;
    super(userRepository);
  }

  async createUser(
    userToCreate: User,
    file: Express.Multer.File | undefined
  ): Promise<RegisterResult> {
    debugger;
    if (file) {
      const profileImgUrl = await uploadAndGetUrl(file, "users");
      userToCreate.profileImgUrl = profileImgUrl;
    }
    const user = (await this.create(userToCreate, true)) as User;
    return {
      user,
      token: await generateJWT({ id: user.id }),
    };
  }

  async signIn(data: LoginType): Promise<any> {}
}
