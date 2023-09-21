import type { Request, Response, NextFunction } from "express";
import { catchAsync } from "../../utils/catch.async";
import { commentService } from "../../services/api_services";
import { ERROR_MESSAGES } from "../../constants/error.constants";

export const validComment = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    const { safeData } = req;
    const comment = await commentService.findComment(
      {
        id: safeData?.params.id,
      },
      false,
      { user: true },
      false,
      true,
      `${ERROR_MESSAGES.COMMENT_NOT_FOUND} ID del comentario: ${safeData?.params.id}.`
    );

    req.comment = comment;
    req.user = comment.user;

    next();
  }
);
