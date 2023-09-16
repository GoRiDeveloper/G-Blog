import z from "zod";
import { ERROR_MESSAGES } from "../../constants/error.constants";
import { UserRole } from "./user.types";

export const userSchema = z.object({
  name: z
    .string({
      required_error: ERROR_MESSAGES.NAME_REQUIRED,
      invalid_type_error: ERROR_MESSAGES.NAME_WRONG_FORMAT,
    })
    .trim()
    .min(7, { message: ERROR_MESSAGES.NAME_MIN_LENGTH })
    .refine((name) => /^[a-zA-Z\s]+$/.test(name), {
      message: ERROR_MESSAGES.NAME_FORMAT,
    }),
  email: z
    .string({
      required_error: ERROR_MESSAGES.EMAIL_REQUIRED,
      invalid_type_error: ERROR_MESSAGES.EMAIL_STRING_FORMAT,
    })
    .trim()
    .toLowerCase()
    .email({ message: ERROR_MESSAGES.EMAIL_INVALID }),
  description: z
    .string({
      required_error: ERROR_MESSAGES.DESC_REQUIRED,
      invalid_type_error: ERROR_MESSAGES.DESC_WRONG_FORMAT,
    })
    .trim()
    .min(20, { message: ERROR_MESSAGES.DESC_MIN_LENGTH }),
  password: z
    .string({
      required_error: ERROR_MESSAGES.PASS_REQUIRED,
      invalid_type_error: ERROR_MESSAGES.PASS_STRING_FORMAT,
    })
    .trim()
    .refine(
      (password) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.{10,})/.test(
          password
        ),
      { message: ERROR_MESSAGES.STRONG_PASS }
    ),
  role: z.enum([UserRole.admin, UserRole.user]).optional(),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: ERROR_MESSAGES.EMAIL_REQUIRED,
      invalid_type_error: ERROR_MESSAGES.EMAIL_STRING_FORMAT,
    })
    .email({ message: ERROR_MESSAGES.EMAIL_INVALID }),
  password: z.string({
    required_error: ERROR_MESSAGES.PASS_REQUIRED,
    invalid_type_error: ERROR_MESSAGES.PASS_STRING_FORMAT,
  }),
});
