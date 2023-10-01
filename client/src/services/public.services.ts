import axios from "axios";
import type { UserLogged, RegisterUser, UserLogin } from "@/models/user.models";
import { loadAbort } from "../utils";

export const login = (data: UserLogin) => {
  const Controller = loadAbort();
  return {
    call: axios.post<UserLogged>(
      "http://localhost:8080/api/v1/users/auth/sign-in",
      data,
      { signal: Controller.signal }
    ),
    controller: Controller,
  };
};

export const register = (data: RegisterUser) => {
  const Controller = loadAbort();
  return {
    call: axios.post<UserLogged>(
      "http://localhost:8080/api/v1/users/auth/sign-up",
      data,
      { signal: Controller.signal }
    ),
    controller: Controller,
  };
};
