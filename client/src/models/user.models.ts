import type { File } from "buffer";
import type { Email } from "../types";

/**
 * Model for registering a new user.
 */
// Modelo del registro de un nuevo usuario.
export interface RegisterUser {
  name: string;
  email: Email;
  description: string;
  password: string;
  profileImgUrl?: File;
};

/**
 * Model of an authenticated user.
 */
// Modelo de un usuario autenticado.
export interface UserLogged {
  token: string;
  user: {
    name: string;
    email: Email;
    description: string;
    profileImgUrl?: string;
  };
};

/**
 * Model of a user to authenticate.
 */
// Modelo de un usuario a autenticarse.
export interface UserLogin {
  email: Email;
  password: string;
};
