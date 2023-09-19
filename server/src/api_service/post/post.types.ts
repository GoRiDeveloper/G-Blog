import z from "zod";
import { Repository } from "typeorm";
import { Post } from "./post.entity";
import { postSchema } from "./post.schema";

export enum PostStatus {
  available = "available",
  disabled = "disabled",
}

export type PostRepository = Repository<Post>;
export type PostType = z.infer<typeof postSchema>;
