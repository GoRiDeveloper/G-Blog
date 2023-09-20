import type { Request, Response, NextFunction } from "express";
import { catchAsync } from "../../../utils/catch.async";
import { HTTP_CODES } from "../../../constants/http.codes.constants";
import { SUCCESS_STATUS } from "../../../constants/success.constants";
import { userService } from "../../../services/api_services";

export const updateUser = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { safeData } = req;

    if (safeData.body.password) delete safeData.body.password;

    await userService.updateUserInfo(safeData?.params.id, safeData?.body);

    return res.status(HTTP_CODES.NOT_RESPONSE).json({
      status: SUCCESS_STATUS.SUCCESS,
    });
  }
);

export const disableUser = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { safeData } = req;
    await userService.disableUser(safeData?.params.id);
    return res.status(HTTP_CODES.NOT_RESPONSE).json({
      status: SUCCESS_STATUS.SUCCESS,
    });
  }
);
