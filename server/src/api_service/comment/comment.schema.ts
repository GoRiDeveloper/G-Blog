import z from "zod";
import { ERROR_MESSAGES } from "../../constants/error.constants";

export const commentSchema = z.object({
  text: z.string({
    required_error: ERROR_MESSAGES.COMMENT_REQUIRED,
    invalid_type_error: ERROR_MESSAGES.COMMENT_STRING_FORMAT,
  }),
});
