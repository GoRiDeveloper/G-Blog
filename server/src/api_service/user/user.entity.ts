import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { type Email, UserRole } from "./user.types";
import { Post } from "../post/post.entity";
import { Comment } from "../comment/comment.entity";
import { GlobalStatus, MulterFileType } from "../../types/global.types";
import { getHashPass } from "./plugins/encrypt.plugin";
import { uploadAndGetUrl } from "../../services/firebase/firebase.service";
import { FILE_UPLOAD_NAMES } from "../../constants/utils.constants";

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

  @Column({ type: "text" })
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPass() {
    this.password = await getHashPass(this.password);
  }

  @Column({ type: "int8", nullable: true })
  passwordChangedAt: number;

  @Column({ type: "enum", default: UserRole.user, enum: UserRole })
  role: UserRole;

  @Column({ type: "enum", default: GlobalStatus.available, enum: GlobalStatus })
  status: GlobalStatus;

  @Column({
    type: "varchar",
    nullable: true,
    name: "profile_img_url",
  })
  profileImgUrl: MulterFileType | string;

  @BeforeInsert()
  async getImgUrl() {
    if (this.profileImgUrl) {
      const file = this.profileImgUrl as Express.Multer.File
      // Función para subir la imagen y obtener la URL.
      this.profileImgUrl = await uploadAndGetUrl(
        file,
        FILE_UPLOAD_NAMES.userPathName
      );
    }
  }

  @OneToMany((_type) => Post, (post) => post.user)
  posts: Post[];

  @OneToMany((_type) => Comment, (comment) => comment)
  comments: Comment[];
}
