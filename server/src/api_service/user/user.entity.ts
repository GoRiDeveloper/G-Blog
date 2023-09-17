import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { type Email, UserRole } from "./user.types";
import { Post } from "../post/post.entity";
import { GlobalStatus } from "../../types/global.types";
import { getHashPass } from "./plugins/encrypt.plugin";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 120 })
  name: string;

  @Column({ type: "varchar", length: 120, unique: true })
  email: Email;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "text", select: false })
  password: string;

  @Column({ type: "date", nullable: true })
  passwordChangedAt: string;

  @Column({ type: "enum", default: UserRole.user, enum: UserRole })
  role: string;

  @Column({ type: "enum", default: GlobalStatus.available, enum: GlobalStatus })
  status: GlobalStatus;

  @Column({
    type: "varchar",
    nullable: true,
    name: "profile_img_url",
  })
  profileImgUrl: string;

  @OneToMany((_type) => Post, (post) => post.user)
  posts: Post[];

  @OneToMany((_type) => Comment, (comment) => comment)
  comments: Comment[];

  @BeforeInsert()
  async hashPass() {
    this.password = await getHashPass(this.password);
  }
}