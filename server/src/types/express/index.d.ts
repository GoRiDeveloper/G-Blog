import type { Express, Request } from "express";
import type { Record } from "zod";
import type { Post, User } from "../../entities";

declare global {
  namespace Express {
    export interface Request {
      safeData?: Record<string, any>;
      user?: User;
      sessionUser?: User;
      post?: Post;
    }
  }
}
