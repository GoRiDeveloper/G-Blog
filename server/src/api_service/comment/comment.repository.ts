import type { CommentRepository } from "./comment.types";
import { AppDataSrc } from "../../services/database/database.config";
import { Comment } from "./comment.entity";

export const commentRepository: CommentRepository =
  AppDataSrc.getRepository(Comment);
