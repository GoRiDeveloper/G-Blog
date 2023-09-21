import z from "zod";
import { Repository } from "typeorm";
import { Post } from "./post.entity";
import { postSchema } from "./post.schema";
import { GlobalStatus } from "../../types/global.types";

export enum PostStatus {
  available = "available",
  disabled = "disabled",
}

export type PostRepository = Repository<Post>;
export type PostType = z.infer<typeof postSchema>;
export type DisablePostType = {
  status: GlobalStatus;
};
