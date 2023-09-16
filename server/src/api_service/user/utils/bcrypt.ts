import bcrypt from "bcrypt";
import { salt } from "../../../config/config";

export const hashPass = async (pass: string): Promise<string> => {
  const generatedSalt = await bcrypt.genSalt(salt);
  return await bcrypt.hash(pass, generatedSalt);
};
