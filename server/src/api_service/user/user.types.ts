import type { Repository } from "typeorm";
import { z } from "zod";
import type { User } from "./user.entity";
import { loginSchema } from "./user.schema";

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

export type RegisterResult = {
  user: User;
  token: string;
};
loginSchema.spa;
export type LoginType = z.infer<typeof loginSchema>;
