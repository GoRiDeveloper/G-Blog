import bcrypt from "bcrypt";
import { salt } from "../../../config/config";
import { AppError } from "../../../utils/app.error";
import { HTTP_ERROR_CODES } from "../../../constants/http.codes.constants";
import { ERROR_MESSAGES } from "../../../constants/error.constants";

export const hashPass = async (pass: string): Promise<string> => {
  const generatedSalt = await bcrypt.genSalt(salt);
  return await bcrypt.hash(pass, generatedSalt);
};

export const comparePasswords = async (
  pass: string,
  encryptPass: string
): Promise<void> => {
  const isCorrect = await bcrypt.compare(pass, encryptPass);
  if (!isCorrect)
    throw new AppError(ERROR_MESSAGES.WRONG_PASS, HTTP_ERROR_CODES.BAD_REQUEST);
};
