import { Router } from "express";
import { signIn } from "../controllers/auth.controllers";
import { schemaValidator } from "../../../middlewares/schema.middleware";
import { loginSchema, userSchema } from "../user.schema";
import { upload } from "../../../middlewares/multer.middleware";

export const authRouter = Router();

authRouter.post(
  "/sign-up",
  upload.single("profileImgUrl"),
  schemaValidator(userSchema),
  signIn
);
authRouter.post("/sign-in", schemaValidator(loginSchema), signIn);
