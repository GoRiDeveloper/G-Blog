import type { PostImgRepository } from "./post.img.types";
import { AppDataSrc } from "../../services/database/database.config";
import { PostImg } from "./post.img.entity";

export const postImgRepository: PostImgRepository =
  AppDataSrc.getRepository(PostImg);
