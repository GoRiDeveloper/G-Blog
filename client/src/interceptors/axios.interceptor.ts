import axios, {
  type AxiosRequestHeaders,
  type InternalAxiosRequestConfig,
} from "axios";
import { LocalStorageKeys } from "@/types";
import { getInLocalStorage } from "@/utils/local.storage.manager";

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

  axios.interceptors.request.use((req: InternalAxiosRequestConfig) => {
    if (req.url?.includes("assets") || req.headers?.Authorization) return req;
    return updateHeader(req);
  });

  axios.interceptors.response.use(
    (res) => res,
    (err) => {
      const redirect = () => {
        window.location.href = `/auth/`;
      };
      if (err.response.status === 401 || err.response.status === 403)
        redirect();
      if (err.response.data.error.code) "";
    }
  );
};
