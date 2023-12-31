import { Router } from "express";
import {
  signIn,
  signUp,
  updatePassword,
} from "../controllers/auth.controllers";
import {
  protect,
  protectAccountOwner,
} from "../../../middlewares/auth.middleware";
import {
  DEEP_WHERE_VALIDATE_SCHEMA,
  FILE_UPLOAD_NAMES,
} from "../../../constants/utils.constants";
import { schemaValidator } from "../../../middlewares/schema.middleware";
import { loginSchema, updatePasswordSchema, userSchema } from "../user.schema";
import { generateSchema } from "../../../schema/global.schema";
import { idSchema } from "../../../schema/id.schema";
import { validUser } from "../middlewares/user.middleware";
import { upload } from "../../../middlewares/multer.middleware";

export const authRouter: Router = Router();
/* 
  Ruta para registro, con middleware para validar un fichero de imagen de usuario, el cuerpo del registro de usuario
  y controlador para generar ese usuario con su token.
*/
authRouter.post(
  "/sign-up",
  upload.single(FILE_UPLOAD_NAMES.profileImgUrl),
  schemaValidator(generateSchema(DEEP_WHERE_VALIDATE_SCHEMA.body, userSchema)),
  signUp
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
// Protección para usuarios autenticados.
authRouter.use(protect);
// Ruta para cambiar la contraseña en sesión.
authRouter.patch(
  "/password/:id",
  schemaValidator(generateSchema(DEEP_WHERE_VALIDATE_SCHEMA.params, idSchema)),
  schemaValidator(
    generateSchema(DEEP_WHERE_VALIDATE_SCHEMA.body, updatePasswordSchema)
  ),
  validUser,
  protectAccountOwner,
  updatePassword
);
