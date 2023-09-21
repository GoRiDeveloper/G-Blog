import { Router } from "express";
import { pathNotFound } from "../middlewares/path.not.found.middleware";
import { usersRouter } from "../api_service/user/routers/user.router";
import { postRouter } from "../api_service/post/post.router";
import { commentRouter } from "../api_service/comment/comment.router";

export const router: Router = Router();

router.use("/users", usersRouter);
router.use("/posts", postRouter);
router.use("/comments", commentRouter);

router.all("*", pathNotFound);
