import { ERROR_STATUS } from "../api_service/error/error.types";
import { ERROR_STATUS as ERROR_STATUS_CONSTANTS } from "../constants/error.constants";

export class AppError extends Error {
  status: ERROR_STATUS;
  statusCode: number;
  isOperational: boolean;
  errors?: any[];

  constructor(message: string | any[], statusCode: number) {
    super(Array.isArray(message) ? ERROR_STATUS_CONSTANTS.ERRORS : message);

    this.status = statusCode.toString().startsWith("4")
      ? ERROR_STATUS.ERROR
      : ERROR_STATUS.FAIL;
    this.statusCode = statusCode;
    this.isOperational = true;
    this.errors = Array.isArray(message) ? message : undefined;

    Error.captureStackTrace(this, this.constructor);
  }
}
