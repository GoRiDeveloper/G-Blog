import type { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catch.async";
import { AppError } from "../utils/app.error";
import { HTTP_ERROR_CODES } from "../constants/http.codes.constants";
import { ERROR_MESSAGES } from "../constants/error.constants";
import { DecodedAuth } from "../types/global.types";
import { decodedToken } from "../plugins/token.plugin";
import { userService } from "../services";

export const protect = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    let token: string | undefined;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    )
      token = req.headers.authorization.split(" ")[1];
    if (!token) {
      next(
        new AppError(
          ERROR_MESSAGES.SESSION_NOT_STARTED,
          HTTP_ERROR_CODES.UNAUTHORIZED
        )
      );
      return;
    }

    const decoded = (await decodedToken(token)) as DecodedAuth;
    const userExists = await userService.findUser(
      { id: decoded.id },
      false,
      false,
      false,
      true,
      ERROR_MESSAGES.SESSION_USER_NOT_EXISTS
    );

    if (userExists.passwordChangedAt) {
      const convertToSeconds = userExists.passwordChangedAt / 1000;
      const changedTimeStamp = parseInt(convertToSeconds.toString(), 10);

      if (decoded.iat < changedTimeStamp)
        return next(
          new AppError(
            ERROR_MESSAGES.USER_PASSWORD_CHANGE,
            HTTP_ERROR_CODES.UNAUTHORIZED
          )
        );
    }

    req.sessionUser = userExists;

    next();
  }
);

export const protectAccountOwner = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { user, sessionUser } = req;

  if (user!.id !== sessionUser!.id)
    return next(
      new AppError(
        ERROR_MESSAGES.ACCOUNT_NOT_YOURS,
        HTTP_ERROR_CODES.UNAUTHORIZED
      )
    );

  next();
};

export const restrictTo = (...roles: string[]) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!roles.includes(req.sessionUser?.role as string)) {
      next(
        new AppError(ERROR_MESSAGES.DENIED_ACTION, HTTP_ERROR_CODES.FORBIDDEN)
      );
      return;
    }
    next();
  };
};
