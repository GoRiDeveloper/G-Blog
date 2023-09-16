import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GlobalStatus } from "../../types/global.types";
import { Post } from "../post/post.entity";

@Entity({ name: "post_imgs" })
export class PostImg extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  postImgUrl: string;

  @Column({ type: "enum", default: GlobalStatus.available, enum: GlobalStatus })
  status: GlobalStatus;

  @ManyToOne((_type) => Post, (post) => post.postImgs)
  @JoinColumn({ name: "post_id" })
  post: Post;
}
