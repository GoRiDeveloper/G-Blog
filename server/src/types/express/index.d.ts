import type { Express, Request } from "express";
import type { Record } from "zod";
import type { User } from "../../entities";

declare global {
  namespace Express {
    export interface Request {
      safeData?: Record<string, any>;
      user?: User | null;
      sessionUser?: User | null;
    }
  }
}
