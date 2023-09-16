import { AppError } from "../../utils/app.error";

export enum ERROR_STATUS {
  FAIL = "fail",
  ERROR = "error",
}

export interface AppErrorProd extends AppError {
  parent?: { code?: string };
  code?: string;
  detail?: string | any;
  errors?: any;
  query?: string;
}
