import z from "zod";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app.error";
import { HTTP_ERROR_CODES } from "../constants/http.codes.constants";

export const schemaValidator = (schema: z.AnyZodObject) => {
  return async (
    req: Request,
    _res: Response,
    next: NextFunction
  ): Promise<any> => {
    const results = await schema.safeParseAsync({
      params: req.params,
      body: req.body,
    });

    if (!results.success) {
      const errors = results.error.issues.map((issue) => {
        return {
          code: issue.code,
          path: issue.path,
          message: issue.message,
        };
      });

      return next(new AppError(errors, HTTP_ERROR_CODES.BAD_REQUEST));
    }

    if (req.safeData?.params || req.safeData?.body) {
      const { body, params } = req.safeData;

      req.safeData = results.data;

      if (params) req.safeData.params = { ...req.safeData.params, ...params };
      if (body) req.safeData.body = { ...req.safeData.body, ...body };
    } else {
      req.safeData = results.data;
    }

    next();
  };
};
