import type { Email } from "../types";

export interface UserLogged {
  token: string;
  user: {
    name: string;
    email: Email;
    description: string;
    profileImgUrl?: string;
  };
}
