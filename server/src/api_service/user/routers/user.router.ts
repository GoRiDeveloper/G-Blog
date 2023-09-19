import { Router } from "express";
import { authRouter } from "./auth.router";
import { schemaValidator } from "../../../middlewares/schema.middleware";
import { generateSchema } from "../../../schema/global.schema";
import { DEEP_WHERE_VALIDATE_SCHEMA } from "../../../constants/utils.constants";
import { idSchema } from "../../../schema/id.schema";
import { userSchema } from "../user.schema";
import { validUser } from "../middlewares/user.middleware";
import {
  protect,
  protectAccountOwner,
} from "../../../middlewares/auth.middleware";
import { disableUser, updateUser } from "../controllers/user.controllers";

export const usersRouter = Router();
// Separación de las rutas de autenticación.
usersRouter.use("/auth", authRouter);
usersRouter
  .use(
    "/:id",
    schemaValidator(
      generateSchema(DEEP_WHERE_VALIDATE_SCHEMA.params, idSchema)
    ),
    protect,
    validUser,
    protectAccountOwner
  )
  .route("/:id")
  // Ruta para actualizar parcialmente los datos de un usuario específico.
  .patch(
    schemaValidator(
      generateSchema(DEEP_WHERE_VALIDATE_SCHEMA.body, userSchema.deepPartial())
    ),
    updateUser
  )
  // Ruta para deshabilitar un usuario específico.
  .delete(disableUser);
