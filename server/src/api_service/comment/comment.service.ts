import type {
  CommentRepository,
  CommentToCreate,
  CommentType,
} from "./comment.types";
import type { Post } from "../post/post.entity";
import type { Comment, User } from "../../entities";
import { EntityFactory } from "../../services/factory/entity.factory";
import { DisableType } from "../../types/global.types";

export class CommentService {
  private readonly entityFactory: EntityFactory;

  constructor(commentRepository: CommentRepository) {
    this.entityFactory = new EntityFactory(commentRepository);
  }
  // Servicio para crear un comentario en una publicación.
  async createComment(
    data: CommentType,
    post: Post,
    user: User
  ): Promise<void> {
    const CommentToCreate: CommentToCreate = {
      ...data,
      post,
      user,
    };
    await this.entityFactory.create(CommentToCreate, false);
  }
  // Servicio génerico para buscar un comentario específico.
  async findComment(
    filters: object,
    attrs?: object | false,
    relations?: object | false,
    extras?: object | false,
    error?: boolean,
    errorMsg?: string
  ): Promise<Comment> {
    return (await this.entityFactory.findOne(
      filters,
      attrs,
      relations,
      extras,
      error,
      errorMsg
    )) as Comment;
  }
  // Servicio para actualizar un comentario específico.
  async updateComment(
    id: number,
    data: CommentType | DisableType
  ): Promise<void> {
    const commentToUpdate = {
      id,
      ...data,
    };
    await this.entityFactory.update(commentToUpdate, false);
  }
}
