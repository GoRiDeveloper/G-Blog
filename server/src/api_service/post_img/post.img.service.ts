import type { UploadedFile } from "express-fileupload";
import type { PostImgRepository } from "./post.img.types";
import type { Post } from "../post/post.entity";
import type { PostImg } from "./post.img.entity";
import { EntityFactory } from "../../services/factory/entity.factory";

export class PostImgService {
  private readonly entityFactory: EntityFactory;

  constructor(postImgRepository: PostImgRepository) {
    this.entityFactory = new EntityFactory(postImgRepository);
  }

  async postNewImg(post: Post, postImgUrl: UploadedFile): Promise<PostImg> {
    return (await this.entityFactory.create(
      { postImgUrl, post },
      true
    )) as PostImg;
  }
}
