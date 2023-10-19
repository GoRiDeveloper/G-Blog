import type { Request, Response, NextFunction } from "express";
import type { User } from "../user.entity";
import { catchAsync } from "../../../utils/catch.async";
import { HTTP_CODES } from "../../../constants/http.codes.constants";
import { userService } from "../../../services/api_services/index";
import { SUCCESS_STATUS } from "../../../constants/success.constants";

export const signUp = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { safeData, file } = req;
    console.log({file});
    const { token, user } = await userService.createUser(
      safeData?.body,
      file
    );

    return res.status(HTTP_CODES.CREATED).json({
      status: SUCCESS_STATUS.SUCCESS,
      token,
      user,
    });
  }
);

export const signIn = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { safeData } = req;
    const { token, user } = await userService.signIn(safeData?.body);

    return res.status(HTTP_CODES.OK).json({
      status: SUCCESS_STATUS.SUCCESS,
      token,
      user,
    });
  }
);

export const updatePassword = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { safeData, user } = req;
    await userService.updatePassword(safeData?.body, user as User);
    return res.status(HTTP_CODES.NOT_RESPONSE).json({
      status: SUCCESS_STATUS.SUCCESS,
    });
  }
);
