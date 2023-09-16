import { Router } from "express";
import { authRouter } from "./auth.router";

export const usersRouter = Router();

usersRouter.use("/auth", authRouter);

usersRouter.route("/:id");
