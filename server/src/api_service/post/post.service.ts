import type { PostRepository, PostType } from "./post.types";
import type { MulterFilesType } from "../../types/global.types";
import type { User } from "../user/user.entity";
import type { Post } from "./post.entity";
import { EntityFactory } from "../../services/factory/entities.factory";
import { postImgService } from "../../services/api_services";

export class PostService {
  private readonly entityFactory: EntityFactory;

  constructor(postRepository: PostRepository) {
    this.entityFactory = new EntityFactory(postRepository);
  }

  async findAllPosts(): Promise<any> {}

  async createPost(
    data: PostType,
    user: User,
    files: MulterFilesType
  ): Promise<Post> {
    const post = (await this.entityFactory.create(
      { ...data, user },
      false
    )) as Post;
    if (Array.isArray(files)) {
      const postImgPromises = files.map(
        async (file: Express.Multer.File) =>
          await postImgService.postNewImg(post, file)
      );
      await Promise.all(postImgPromises);
    }
    return post;
  }
}
