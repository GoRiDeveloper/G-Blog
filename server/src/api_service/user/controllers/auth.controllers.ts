import type { Request, Response, NextFunction } from "express";
import { catchAsync } from "../../../utils/catch.async";
import { HTTP_CODES } from "../../../constants/http.codes.constants";
import { userService } from "../../../services/index";
import { SUCCESS_STATUS } from "../../../constants/success.constants";

export const signIn = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { safeData, file } = req;
    const { user, token } = await userService.createUser(safeData?.body, file);

    return res.status(HTTP_CODES.OK).json({
      status: SUCCESS_STATUS.SUCCESS,
      token,
      user,
    });
  }
);
