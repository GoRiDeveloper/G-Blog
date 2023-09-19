import { AppDataSrc } from "../../services/database/database.config";
import { Post } from "./post.entity";
import { PostRepository } from "./post.types";

export const postRepository: PostRepository = AppDataSrc.getRepository(Post);
