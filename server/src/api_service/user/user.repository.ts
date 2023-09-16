import { AppDataSrc } from "../../services/database/database.config";
import { User } from "./user.entity";
import { UserRepository } from "./user.types";

export const userRepository: UserRepository = AppDataSrc.getRepository(User);
