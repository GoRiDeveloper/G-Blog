import { Request, Response, NextFunction } from "express";
import { HTTP_ERROR_CODES } from "../../constants/http.codes.constants";
import { ERROR_STATUS, ERROR_TYPES } from "../../constants/error.constants";
import { mode, modes } from "../../config/config";
import { sendErrorDev, sendErrorProd } from "./error.controller";
import {
  handleCastError22001,
  handleCastError22P02,
  handleCastError2305,
  handleJWTError,
  handleJWTExpiredError,
  handleSequelizeDbError,
  handleSequelizeValidatonError,
  handleTORMDuplicate,
} from "../../utils/errors";
import { AppErrorProd } from "./error.types";

export const globalErrorHandler = (
  err: AppErrorProd,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  err.statusCode = err.statusCode || HTTP_ERROR_CODES.INTERNAL_SERVER;
  err.status = err.status || ERROR_STATUS.FAIL;

  if (mode === modes.dev) sendErrorDev(err, res);
  if (mode === modes.prod) {
    let error = err;

    if (err.parent?.code === ERROR_TYPES.exceededLength)
      error = handleCastError22001();
    if (err.parent?.code === ERROR_TYPES.invalidTypeData)
      error = handleCastError22P02();
    if (err.parent?.code === ERROR_TYPES.duplicateValue)
      error = handleCastError2305();
    if (err.parent?.code === ERROR_TYPES.invalidToken) error = handleJWTError();
    if (err.parent?.code === ERROR_TYPES.tokenExpired)
      error = handleJWTExpiredError();
    if (err.parent?.code === ERROR_TYPES.sequelizeDatabase)
      error = handleSequelizeDbError();
    if (err.code === ERROR_TYPES.typeORMDuplicate)
      error = handleTORMDuplicate(err.detail);
    if (err.parent?.code === ERROR_TYPES.sequelizeValidation)
      error = handleSequelizeValidatonError(err.errors);

    sendErrorProd(error, res);
  }
};
