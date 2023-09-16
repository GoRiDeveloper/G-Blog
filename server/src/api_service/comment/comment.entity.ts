import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GlobalStatus } from "../../types/global.types";
import { User } from "../user/user.entity";
import { Post } from "../post/post.entity";

@Entity({ name: "comments" })
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "text" })
  text: string;

  @Column({ type: "enum", default: GlobalStatus.available, enum: GlobalStatus })
  status: GlobalStatus;

  @ManyToOne((_type) => User, (user) => user.comments)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne((_type) => Post, (post) => post.comments)
  @JoinColumn({ name: "post_id" })
  post: Post;
}
