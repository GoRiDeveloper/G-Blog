import type { File } from "buffer";
import type { Email } from "../types";

export interface RegisterUser {
  name: string;
  email: Email;
  description: string;
  password: string;
  profileImg?: File;
}
export interface UserLogged {
  token: string;
  user: {
    name: string;
    email: Email;
    description: string;
    profileImgUrl?: string;
  };
}
export interface UserLogin {
  email: Email;
  password: string;
}
