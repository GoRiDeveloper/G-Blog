//import { redirect } from "next/navigation";
import axios, {
  type AxiosRequestHeaders,
  type InternalAxiosRequestConfig,
  type AxiosError
} from "axios";
import {
  SnackbarManager,
  getValidationError,
} from "@/utils";

/**
 * Interceptor of http requests made with axios.
 * 
 * @returns { void } Intercept requests functionality to handle request headers and possible errors in the http response.
 */
// Interceptor de las peticiones http realizadas con axios.
export const AxiosInterceptor = (): any => {

  /**
   * Function to update the headers of http requests.
   * 
   * @param { InternalAxiosRequestConfig } req - Configuration of the request with axios.
   * 
   * @returns { InternalAxiosRequestConfig } Configuration of the request with axios.
   */
  // Función para actualizar las cabeceras de las peticiones http.
  const updateHeader = (
    req: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig => {

    /**
     * Create a generic header for http requests.
     */
    // Cabecera génerica para las peticiones http.
    const newHeaders = {
      "Content-Type": "application/json",
    } as AxiosRequestHeaders;

    // Actualizamos la cabecera de la petición http.
    req.headers = newHeaders;

    return req;
  };

  /**
   * Interceptor of http request.
   * 
   * @param { InternalAxiosRequestConfig } req - Configuration of the request with axios.
   * 
   * @returns { InternalAxiosRequestConfig } Configuration of the request with axios.
   */
  // Interceptor de la petición http.
  const requestInterceptor = (
    req: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig => {

    // Verificamos si en nuestra petición existe acceso a peticiones estaticas,
    // cabeceras de autorización o cabeceras de tipo de contenido, si es así,
    // retornamos la petición con esas configuraciones.
    if (
      req.url?.includes("assets") ||
      req.headers?.Authorization ||
      req.headers["Content-Type"]
    )
      return req;

    // Devolvemos la función para actualizar las cabeceras.
    return updateHeader(req);

  };

  /**
   * Interceptor to handle possible errors in our response to an http request.
   * 
   * @param { AxiosError<any> } err - Request response errors with axios.
   * 
   * @returns { never | void } Functionality to handle possible errors of our http response.
   */
  // Interceptor para manejar posibles errores en nuestra respuesta a una petición http.
  const errorResponseInterceptor: (
    (error: AxiosError<any>) => never | void
  ) | null | undefined = (err: AxiosError<any>): never | void => {
    console.log({ InterceptorError: err });
    // Verificamos si el error es de conexión al servidor para dar respuesta al usuario.
    if (err.code === "ERR_NETWORK")
      return SnackbarManager.error(getValidationError(err.code));

    // // Función para devolver al usuario a la página de autenticación.
    // const toAuth = (): void => {
    //   redirect("/auth/login");
    // };

    // // Verificamos si el error es de autorización para dar respuesta al usuario.
    // if (err?.response?.status === 401 || err?.response?.status === 403) {
    //   SnackbarManager.error(getValidationError(err?.response?.data?.message));
    //   toAuth();
    // };
    if (err.response?.status === 401 || err.response?.status === 403) return;

    // Verificamos si son multiples errores para dar respuesta al usuario.
    if (err?.response?.data?.errors) {
      err
        ?.response
        ?.data
        ?.errors
        .forEach((error: any) =>
          SnackbarManager.error(getValidationError(error.message)
        )
        );
      return;
    };

    // Verificamos si es solo un error para dar respuesta al usuario.
    if (err?.response?.data?.message) {
      if (err?.response?.data?.message.startsWith("Valor duplicado:")) {
        return SnackbarManager.error(err?.response?.data?.message);
      };
      return SnackbarManager.error(getValidationError(err?.response?.data?.message));
    };

  };

  // Interceptor de las peticiones en axios.
  axios.interceptors.request.use(requestInterceptor);

  // Interceptor de las respuestad de las peticiones de axios.
  axios.interceptors.response.use(
    (res) => res,
    errorResponseInterceptor
  );
};
