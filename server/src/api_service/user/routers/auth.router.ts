import { Router } from "express";
import { signIn } from "../controllers/auth.controllers";
import { schemaValidator } from "../../../middlewares/schema.middleware";
import { loginSchema, userSchema } from "../user.schema";
import { upload } from "../../../middlewares/multer.middleware";
import { generateSchema } from "../../../schema/global.schema";
import { DEEP_WHERE_VALIDATE_SCHEMA } from "../../../constants/utils.constants";

export const authRouter = Router();
/* 
  Ruta para registro, con middleware para validar un fichero de imagen de usuario, el cuerpo del registro de usuario
  y controlador para generar ese usuario con su token.
*/
authRouter.post(
  "/sign-up",
  upload.single("profileImgUrl"),
  schemaValidator(generateSchema(DEEP_WHERE_VALIDATE_SCHEMA.body, userSchema)),
  signIn
);
/*
  Ruta para iniciar sesión, con middleware para validar el cuerpo de los datos de inicio de sesión y controlador
  para generar tu token.
*/
authRouter.post(
  "/sign-in",
  schemaValidator(generateSchema(DEEP_WHERE_VALIDATE_SCHEMA.body, loginSchema)),
  signIn
);
