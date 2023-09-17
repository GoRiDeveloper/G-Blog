import { comparePasswords, hashPass } from "../utils/bcrypt";
import { generateJWT } from "../../../utils/jwt";

export const getHashPass = async (pass: string) => await hashPass(pass);

export const comparePass = async (pass: string, encryptPass: string) =>
  await comparePasswords(pass, encryptPass);

export const getToken = async (data: object) => await generateJWT(data);
