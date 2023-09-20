import { Router } from "express";
import { findAllPosts, createPost } from "./post.controllers";
import { protect } from "../../middlewares/auth.middleware";
import { upload } from "../../middlewares/multer.middleware";
import { schemaValidator } from "../../middlewares/schema.middleware";
import { generateSchema } from "../../schema/global.schema";
import { postSchema } from "./post.schema";
import {
  DEEP_WHERE_VALIDATE_SCHEMA,
  FILE_UPLOAD_NAMES,
} from "../../constants/utils.constants";

export const postRouter: Router = Router();

postRouter
  .route("/")
  .get(findAllPosts)
  // Ruta para hacer una nueva publicación.
  .post(
    upload.array(FILE_UPLOAD_NAMES.postImgs, 5),
    protect,
    schemaValidator(
      generateSchema(DEEP_WHERE_VALIDATE_SCHEMA.body, postSchema)
    ),
    createPost
  );
