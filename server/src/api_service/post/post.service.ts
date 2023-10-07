import type { UploadedFile } from "express-fileupload";
import type { PostRepository, PostType } from "./post.types";
import type { DisableType } from "../../types/global.types";
import type { User } from "../user/user.entity";
import type { Post } from "./post.entity";
import { EntityFactory } from "../../services/factory/entity.factory";
import { postImgService } from "../../services/api_services";

export class PostService {
  private readonly entityFactory: EntityFactory;

  constructor(postRepository: PostRepository) {
    this.entityFactory = new EntityFactory(postRepository);
  }
  // Servicio génerico para encontrar una publicación.
  async findPost(
    filters: object,
    attrs?: object | false,
    relations?: object | false,
    extras?: object | false,
    error?: boolean,
    errorMsg?: string
  ): Promise<Post> {
    return (await this.entityFactory.findOne(
      filters,
      attrs,
      relations,
      extras,
      error,
      errorMsg
    )) as Post;
  }
  // Servicio génerico para encontrar todas las publicaciones.
  async findAllPosts(
    filters: object,
    attrs?: object | false,
    relations?: object | false
  ): Promise<[any[], number]> {
    return await this.entityFactory.findAndCountAll(filters, attrs, relations);
  }
  // Servicio para crear una nueva publicación y subir las imagenes de tu publicación.
  async createPost(
    data: PostType,
    user: User,
    files: UploadedFile[]
  ): Promise<void> {
    const post = (await this.entityFactory.create(
      { ...data, user },
      true
    )) as Post;
    if (Array.isArray(files)) {
      const postImgPromises = files.map(
        async (file: UploadedFile) =>
          await postImgService.postNewImg(post, file)
      );
      await Promise.all(postImgPromises);
    }
  }
  // Servicio génerico para actualizar una publicación.
  async updatePost(id: number, data: PostType | DisableType): Promise<void> {
    const postToUpdate = {
      id,
      ...data,
    };
    await this.entityFactory.update(postToUpdate, false);
  }
}
