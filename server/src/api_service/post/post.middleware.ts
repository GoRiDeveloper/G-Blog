import type { Request, Response, NextFunction } from "express";
import { catchAsync } from "../../utils/catch.async";
import { postService } from "../../services/api_services";
import { ERROR_MESSAGES } from "../../constants/error.constants";
import { GlobalStatus } from "../../types/global.types";

export const validPost = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    const { safeData } = req;
    const post = await postService.findPost(
      {
        id: safeData?.params.id,
        status: GlobalStatus.available,
      },
      false,
      { user: true },
      false,
      true,
      `${ERROR_MESSAGES.POST_NOT_FOUND} ID de la publicación: ${safeData?.params.id}.`
    );

    req.post = post;
    req.user = post.user;

    next();
  }
);
