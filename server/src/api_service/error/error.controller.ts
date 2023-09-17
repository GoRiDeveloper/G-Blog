import type { Response } from "express";
import type { AppErrorProd } from "./error.types";
import { ERROR_MESSAGES, ERROR_STATUS } from "../../constants/error.constants";
import { HTTP_ERROR_CODES } from "../../constants/http.codes.constants";
//import { Error } from "./error.entity";

export const sendErrorDev = async (err: AppErrorProd, res: Response) => {
  if (err.query) err.query = ERROR_STATUS.UNAUTHORIZED;

  // await Error.create({
  //   status: err.status,
  //   message: err.message,
  //   stack: err.stack,
  // }).save();

  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    err,
  });
};

export const sendErrorProd = (err: AppErrorProd, res: Response) => {
  console.log(err);
  if (err.isOperational)
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

  return res.status(HTTP_ERROR_CODES.INTERNAL_SERVER).json({
    status: ERROR_STATUS.FAIL,
    message: ERROR_MESSAGES.SERVER_GENERIC,
  });
};