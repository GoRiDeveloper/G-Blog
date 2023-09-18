import { comparePasswords, hashPass } from "../utils/bcrypt";

export const getHashPass = async (pass: string) => await hashPass(pass);

export const comparePass = async (pass: string, encryptPass: string) =>
  await comparePasswords(pass, encryptPass);
