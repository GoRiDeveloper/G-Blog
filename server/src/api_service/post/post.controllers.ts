import type { Request, Response, NextFunction } from "express";
import type { UploadedFile } from "express-fileupload";
import type { User } from "../../entities";
import { catchAsync } from "../../utils/catch.async";
import { HTTP_CODES } from "../../constants/http.codes.constants";
import { postService } from "../../services/api_services";
import { GlobalStatus } from "../../types/global.types";
import {
  SUCCESS_MESSAGES,
  SUCCESS_STATUS,
} from "../../constants/success.constants";

export const findAllPosts = catchAsync(
  async (_req: Request, res: Response, _next: NextFunction) => {
    const [posts, results] = await postService.findAllPosts({
      status: GlobalStatus.available,
    });
    return res.status(HTTP_CODES.OK).json({
      status: SUCCESS_STATUS.SUCCESS,
      posts,
      results,
    });
  }
);

export const createPost = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { safeData, sessionUser, files } = req;
    await postService.createPost(
      safeData?.body,
      sessionUser as User,
      files?.postsImgs as UploadedFile[]
    );
    return res.status(HTTP_CODES.CREATED).json({
      status: SUCCESS_STATUS.SUCCESS,
      message: SUCCESS_MESSAGES.POST_CREATED,
    });
  }
);

export const findMyPosts = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { sessionUser } = req;
    const [posts, results] = await postService.findAllPosts({
      status: GlobalStatus.available,
      user: {
        id: sessionUser?.id,
      },
    });

    return res.status(HTTP_CODES.OK).json({
      status: SUCCESS_STATUS.SUCCESS,
      posts,
      results,
    });
  }
);

export const findUserPosts = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { user } = req;
    const [posts, results] = await postService.findAllPosts({
      status: GlobalStatus.available,
      user: {
        id: user?.id,
      },
    });

    return res.status(HTTP_CODES.OK).json({
      status: SUCCESS_STATUS.SUCCESS,
      posts,
      results,
    });
  }
);

export const findPost = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { safeData } = req;
    const post = await postService.findPost({ id: safeData?.params.id });

    return res.status(HTTP_CODES.OK).json({
      status: SUCCESS_STATUS.SUCCESS,
      post,
    });
  }
);

export const updatePost = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { safeData } = req;
    await postService.updatePost(safeData?.params.id, safeData?.body);
    return res.status(HTTP_CODES.NOT_RESPONSE).json({
      status: SUCCESS_STATUS.SUCCESS,
    });
  }
);

export const disablePost = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { safeData } = req;
    await postService.updatePost(safeData?.params.id, {
      status: GlobalStatus.available,
    });
    return res.status(HTTP_CODES.NOT_RESPONSE).json({
      status: SUCCESS_STATUS.SUCCESS,
    });
  }
);
