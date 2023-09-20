import type { Request, Response, NextFunction } from "express";
import type { User } from "../../entities";
import { catchAsync } from "../../utils/catch.async";
import { HTTP_CODES } from "../../constants/http.codes.constants";
import {
  SUCCESS_MESSAGES,
  SUCCESS_STATUS,
} from "../../constants/success.constants";
import { postService } from "../../services/api_services";

export const findAllPosts = catchAsync(
  async (_req: Request, res: Response, _next: NextFunction) => {
    await postService.findAllPosts();
    return res.status(HTTP_CODES.OK).json({
      status: SUCCESS_STATUS.SUCCESS,
    });
  }
);

export const createPost = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { safeData, sessionUser, files } = req;
    await postService.createPost(safeData?.body, sessionUser as User, files);
    return res.status(HTTP_CODES.CREATED).json({
      status: SUCCESS_STATUS.SUCCESS,
      message: SUCCESS_MESSAGES.POST_CREATED,
    });
  }
);
