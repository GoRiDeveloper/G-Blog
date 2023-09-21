import { Router } from "express";
import { schemaValidator } from "../../middlewares/schema.middleware";
import { generateSchema } from "../../schema/global.schema";
import { DEEP_WHERE_VALIDATE_SCHEMA } from "../../constants/utils.constants";
import { idSchema } from "../../schema/id.schema";
import { commentSchema } from "./comment.schema";
import { validComment } from "./comment.middleware";
import { validPost } from "../post/post.middleware";
import {
  protect,
  protectAccountOwner,
} from "../../middlewares/auth.middleware";
import {
  createComment,
  disableComment,
  findAllComments,
  updateComment,
} from "./comment.controllers";

export const commentRouter: Router = Router();

commentRouter.use(protect);
// Ruta para obtener los comentarios.
commentRouter.get("/", findAllComments);

commentRouter.use(
  "/:id",
  schemaValidator(generateSchema(DEEP_WHERE_VALIDATE_SCHEMA.params, idSchema))
);
// Ruta para añadir un nuevo comentario.
commentRouter.post(
  "/:id",
  validPost,
  schemaValidator(
    generateSchema(DEEP_WHERE_VALIDATE_SCHEMA.body, commentSchema)
  ),
  createComment
);
commentRouter
  .use("/:id", validComment)
  .route("/:id")
  // Ruta para actualizar un comentario.
  .patch(
    protectAccountOwner,
    schemaValidator(
      generateSchema(
        DEEP_WHERE_VALIDATE_SCHEMA.body,
        commentSchema.deepPartial()
      )
    ),
    updateComment
  )
  // Ruta para eliminar un comentario.
  .delete(protectAccountOwner, disableComment);
