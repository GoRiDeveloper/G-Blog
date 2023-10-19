import { redirect } from "next/navigation";
import axios, {
  type AxiosRequestHeaders,
  type InternalAxiosRequestConfig,
} from "axios";
import { LocalStorageKeys } from "@/types";
import {
  SnackbarManager,
  getInLocalStorage,
  getValidationError,
} from "@/utils";

export const AxiosInterceptor = () => {
  const updateHeader = (req: InternalAxiosRequestConfig) => {
    const token = getInLocalStorage(LocalStorageKeys.TOKEN);
    const newHeaders = {
      Authorization: token,
      "Content-Type": "application/json",
    } as AxiosRequestHeaders;

    req.headers = newHeaders;

    return req;
  };
  const axiosReqInterceptors = (req: InternalAxiosRequestConfig) => {
    if (
      req.url?.includes("assets") ||
      req.headers?.Authorization ||
      req.headers["Content-Type"]
    )
      return req;

    return updateHeader(req);
  };
  const errCbRes: ((error: any) => any) | null | undefined = (err) => {
    console.log(err);
    if (err.code === "ERR_NETWORK")
      return SnackbarManager.error(getValidationError(err.code));

    const toAuth = () => redirect("/auth/login");

    if (err?.response?.status === 401 || err?.response?.status === 403) {
      SnackbarManager.error(getValidationError(err?.response?.data?.message));
      return toAuth();
    }
    if (err?.response?.data?.errors) {
      err?.response?.data?.errors.forEach((error: any) => SnackbarManager.error(getValidationError(error.message))
      );
      return;
    }
    if (err?.response?.data?.message) {
      if (err?.response?.data?.message.startsWith("Valor duplicado:")) {
        return SnackbarManager.error(err?.response?.data?.message);
      }
      return SnackbarManager.error(getValidationError(err?.response?.data?.message));
    }
  };

  axios.interceptors.request.use(axiosReqInterceptors);
  axios.interceptors.response.use(
    (res) => res,
    errCbRes
  );
};
