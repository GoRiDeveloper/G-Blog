import axios from "axios";
import type { UserLogged } from "@/models/user.models";
import { loadAbort } from "../utils";

export const login = (data: any) => {
  const Controller = loadAbort();
  return {
    call: axios.post<UserLogged>("", data, { signal: Controller.signal }),
    controller: Controller,
  };
};
