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
import { schemaValidator } from "../../../middlewares/schema.middleware";
import { loginSchema, updatePasswordSchema, userSchema } from "../user.schema";
import { upload } from "../../../middlewares/multer.middleware";
import { generateSchema } from "../../../schema/global.schema";
import { DEEP_WHERE_VALIDATE_SCHEMA } from "../../../constants/utils.constants";
import { idSchema } from "../../../schema/id.schema";
import { validUser } from "../middlewares/user.middleware";

export const authRouter = Router();
/* 
  Ruta para registro, con middleware para validar un fichero de imagen de usuario, el cuerpo del registro de usuario
  y controlador para generar ese usuario con su token.
*/
authRouter.post(
  "/sign-up",
  upload.single("profileImgUrl"),
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
