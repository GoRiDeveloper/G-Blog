import type { Request, Response, NextFunction } from "express";
import type { Post } from "../post/post.entity";
import type { User } from "../user/user.entity";
import { GlobalStatus } from "../../types/global.types";
import { catchAsync } from "../../utils/catch.async";
import { HTTP_CODES } from "../../constants/http.codes.constants";
import { commentService } from "../../services/api_services";
import {
  SUCCESS_MESSAGES,
  SUCCESS_STATUS,
} from "../../constants/success.constants";

export const findAllComments = catchAsync(
  async (_req: Request, res: Response, _next: NextFunction) => {
    const [comments, results] = await commentService.findAllComments({
      status: GlobalStatus.available,
    });
    return res.status(HTTP_CODES.OK).json({
      status: SUCCESS_STATUS.SUCCESS,
      comments,
      results,
    });
  }
);

export const createComment = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { safeData, sessionUser, post } = req;
    await commentService.createComment(
      safeData?.body,
      post as Post,
      sessionUser as User
    );
    return res.status(HTTP_CODES.CREATED).json({
      status: SUCCESS_STATUS.SUCCESS,
      message: SUCCESS_MESSAGES.COMMENT_CREATED,
    });
  }
);

export const updateComment = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { safeData } = req;
    await commentService.updateComment(safeData?.params.id, safeData?.body);
    return res.status(HTTP_CODES.NOT_RESPONSE).json({
      status: SUCCESS_STATUS.SUCCESS,
    });
  }
);

export const disableComment = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { safeData } = req;
    await commentService.updateComment(safeData?.params.id, {
      status: GlobalStatus.disabled,
    });
    return res.status(HTTP_CODES.NOT_RESPONSE).json({
      status: SUCCESS_STATUS.SUCCESS,
    });
  }
);
