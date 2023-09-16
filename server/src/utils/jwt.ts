import jwt, { type JwtPayload } from "jsonwebtoken";
import { jwtConfig } from "../config/config";
import { AppError } from "./app.error";
import { HTTP_ERROR_CODES } from "../constants/http.codes.constants";
import { ERROR_MESSAGES } from "../constants/error.constants";

export const generateJWT = (data: object): Promise<string> => {
  return new Promise((res, rej) => {
    jwt.sign(
      data,
      jwtConfig.secret,
      { expiresIn: jwtConfig.expiresIn },
      (e, token) => {
        if (e) throw rej(e);
        if (!token)
          throw rej(
            new AppError(
              ERROR_MESSAGES.TOKEN_UNGENERATED,
              HTTP_ERROR_CODES.INTERNAL_SERVER
            )
          );
        res(token);
      }
    );
  });
};

export const verifyJWT = (token: string): Promise<string | JwtPayload> => {
  return new Promise((res, rej) => {
    jwt.verify(token, jwtConfig.secret, {}, (e, decoded) => {
      if (e) throw rej(e);
      if (!decoded)
        throw rej(
          new AppError(
            ERROR_MESSAGES.UNDECODED,
            HTTP_ERROR_CODES.INTERNAL_SERVER
          )
        );
      res(decoded);
    });
  });
};
