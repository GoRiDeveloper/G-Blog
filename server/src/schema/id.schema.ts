import z from "zod";
import { ERROR_MESSAGES } from "../constants/error.constants";

export const idSchema = z.object({
  id: z.string().transform((id, ctx) => {
    const parsed = parseInt(id);
    if (isNaN(parsed))
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: ERROR_MESSAGES.ID_TYPE_MISMATCH,
      });
    return parsed;
  }),
});
