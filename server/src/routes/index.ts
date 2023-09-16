import { Router } from "express";
import { pathNotFound } from "../middlewares/path.not.found.middleware";
import { usersRouter } from "../api_service/user/routers/user.router";

export const router = Router();

router.use("/users", usersRouter);

router.all("*", pathNotFound);
