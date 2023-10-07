import z from "zod";
import type { Repository } from "typeorm";
import type { UploadedFile } from "express-fileupload";
import type { User } from "./user.entity";
import { loginSchema, updatePasswordSchema, userSchema } from "./user.schema";

export type Email = `${string}@${string}.${string}`;

export enum UserRole {
  admin = "admin",
  user = "user",
}

export enum UserStatus {
  available = "available",
  disabled = "disabled",
}

export type UserRepository = Repository<User>;
export type AuthResult = {
  token: string;
  user: UserDto;
};
export type UserDto = {
  name: string;
  email: Email;
  description: string;
  profileImgUrl?: string | UploadedFile;
};
export type UserType = z.infer<typeof userSchema>;
export type LoginType = z.infer<typeof loginSchema>;
export type UpdatePasswordType = z.infer<typeof updatePasswordSchema>;
