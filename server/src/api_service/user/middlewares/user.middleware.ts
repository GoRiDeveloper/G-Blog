import type { Request, Response, NextFunction } from "express";
import { catchAsync } from "../../../utils/catch.async";
import { userService } from "../../../services/api_services";
import { ERROR_MESSAGES } from "../../../constants/error.constants";

export const validUser = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    const { id } = req.safeData?.params;
    const user = await userService.findUser(
      { id },
      false,
      false,
      false,
      true,
      `${ERROR_MESSAGES.USER_NOT_EXISTS} ID de Usuario: ${id}.`
    );

    req.user = user;

    next();
  }
);
