import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app.error";
import { HTTP_ERROR_CODES } from "../constants/http.codes.constants";
import { ERROR_MESSAGES } from "../constants/error.constants";

export const pathNotFound = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  return next(
    new AppError(
      `${ERROR_MESSAGES.PATH_NOT_FOUND} ${req.originalUrl}`,
      HTTP_ERROR_CODES.NOT_FOUND
    )
  );
};
