import { Router } from "express";
import { schemaValidator } from "../../middlewares/schema.middleware";
import { generateSchema } from "../../schema/global.schema";
import { postSchema } from "./post.schema";
import { validUser } from "../user/middlewares/user.middleware";
import { idSchema } from "../../schema/id.schema";
import { validPost } from "./post.middleware";
import {
  findAllPosts,
  createPost,
  findMyPosts,
  findUserPosts,
  findPost,
  updatePost,
  disablePost,
} from "./post.controllers";
import {
  protect,
  protectAccountOwner,
} from "../../middlewares/auth.middleware";
import { DEEP_WHERE_VALIDATE_SCHEMA } from "../../constants/utils.constants";

export const postRouter: Router = Router();

postRouter
  .route("/")
  // Ruta para obtener todas las publicaciones de la aplicación.
  .get(findAllPosts)
  // Ruta para hacer una nueva publicación.
  .post(
    protect,
    schemaValidator(
      generateSchema(DEEP_WHERE_VALIDATE_SCHEMA.body, postSchema)
    ),
    createPost
  );

postRouter.use(protect);
// Ruta para encontrar las publicaciones del usuario en sesión.
postRouter.get("/me", findMyPosts);
// Ruta para encontrar las publicaciones de un usuario en específico.
postRouter.get(
  "/profile/:id",
  schemaValidator(generateSchema(DEEP_WHERE_VALIDATE_SCHEMA.params, idSchema)),
  validUser,
  findUserPosts
);

postRouter
  .use(
    "/:id",
    schemaValidator(
      generateSchema(DEEP_WHERE_VALIDATE_SCHEMA.params, idSchema)
    ),
    validPost
  )
  .route("/:id")
  // Ruta para encontrar una publicación con un ID específico.
  .get(findPost)
  .patch(
    protectAccountOwner,
    schemaValidator(
      generateSchema(DEEP_WHERE_VALIDATE_SCHEMA.body, postSchema.deepPartial())
    ),
    updatePost
  )
  // Ruta para deshabilitar una publicación con un ID específico.
  .delete(protectAccountOwner, disablePost);
