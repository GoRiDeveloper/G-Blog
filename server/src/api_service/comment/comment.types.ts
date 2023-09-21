import z from "zod";
import type { Repository } from "typeorm";
import type { Comment } from "./comment.entity";
import type { User } from "../user/user.entity";
import type { Post } from "../post/post.entity";
import { commentSchema } from "./comment.schema";

export enum CommentStatus {
  available = "available",
  disabled = "disabbled",
}

export type CommentRepository = Repository<Comment>;
export type CommentType = z.infer<typeof commentSchema>;

export interface CommentToCreate extends CommentType {
  user: User;
  post: Post;
}
