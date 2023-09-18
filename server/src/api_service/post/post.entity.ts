import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../user/user.entity";
import { Comment } from "../comment/comment.entity";
import { GlobalStatus } from "../../types/global.types";
import { PostImg } from "../post_img/post.img.entity";

@Entity({ name: "posts" })
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "text" })
  content: string;

  @Column({ type: "enum", default: GlobalStatus.available, enum: GlobalStatus })
  status: GlobalStatus;

  @ManyToOne((_type) => User, (user) => user.posts)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany((_type) => Comment, (comment) => comment)
  comments: Comment[];

  @OneToMany((_type) => PostImg, (postImg) => postImg.post)
  postImgs: PostImg[];
}
