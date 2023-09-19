import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GlobalStatus } from "../../types/global.types";
import { Post } from "../post/post.entity";
import { uploadAndGetUrl } from "../../services/firebase/firebase.service";
import { FILE_UPLOAD_NAMES } from "../../constants/utils.constants";

@Entity({ name: "post_imgs" })
export class PostImg extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  postImgUrl: string;

  @BeforeInsert()
  async getImgUrl() {
    const file: unknown = this.postImgUrl;
    // Función para subir la imagen y obtener la URL.
    this.postImgUrl = await uploadAndGetUrl(
      file as Express.Multer.File,
      FILE_UPLOAD_NAMES.postImgs
    );
  }

  @Column({ type: "enum", default: GlobalStatus.available, enum: GlobalStatus })
  status: GlobalStatus;

  @ManyToOne((_type) => Post, (post) => post.postImgs)
  @JoinColumn({ name: "post_id" })
  post: Post;
}
