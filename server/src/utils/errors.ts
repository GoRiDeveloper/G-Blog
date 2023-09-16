import { ERROR_MESSAGES } from "../constants/error.constants";
import { HTTP_ERROR_CODES } from "../constants/http.codes.constants";
import { AppError } from "./app.error";

export const handleCastError22001 = () =>
  new AppError(ERROR_MESSAGES.EXCEDED_LENGTH, HTTP_ERROR_CODES.BAD_REQUEST);

export const handleCastError22P02 = () =>
  new AppError(ERROR_MESSAGES.DB_INVALID_TYPE, HTTP_ERROR_CODES.BAD_REQUEST);

export const handleCastError2305 = () =>
  new AppError(ERROR_MESSAGES.VALUE_EXISTS, HTTP_ERROR_CODES.BAD_REQUEST);

export const handleJWTError = () =>
  new AppError(ERROR_MESSAGES.INVALID_TOKEN, HTTP_ERROR_CODES.UNAUTHORIZED);

export const handleJWTExpiredError = () =>
  new AppError(ERROR_MESSAGES.TOKEN_EXPIRED, HTTP_ERROR_CODES.UNAUTHORIZED);

export const handleSequelizeDbError = () =>
  new AppError(ERROR_MESSAGES.SEQUELIZE_SAVE, HTTP_ERROR_CODES.INTERNAL_SERVER);

export const handleTORMDuplicate = (detail: string) =>
  new AppError(
    `${ERROR_MESSAGES.TYPEORM_DUPLICATE} ${detail}`,
    HTTP_ERROR_CODES.BAD_REQUEST
  );

export const handleSequelizeValidatonError = (errors: [any]) => {
  const cleanErrors = errors.map((error) => {
    const message = `${ERROR_MESSAGES.KEY_VALUE_INVALID} Clave (${error.path}) / Valor (${error.value}).`;
    return { message };
  });
  return new AppError(cleanErrors, 400);
};
