import z from "zod";
import { ERROR_MESSAGES } from "../../constants/error.constants";

export const postSchema = z.object({
  title: z
    .string({
      required_error: ERROR_MESSAGES.POST_TITLE_REQUIRED,
      invalid_type_error: ERROR_MESSAGES.POST_TITLE_STRING_FORMAT,
    })
    .trim()
    .min(10, { message: ERROR_MESSAGES.POST_TITLE_MIN }),
  content: z
    .string({
      required_error: ERROR_MESSAGES.POST_CONTENT_REQUIRED,
      invalid_type_error: ERROR_MESSAGES.POST_CONTENT_STRING_FORMAT,
    })
    .trim()
    .min(50, { message: ERROR_MESSAGES.POST_CONTENT_MIN }),
});
