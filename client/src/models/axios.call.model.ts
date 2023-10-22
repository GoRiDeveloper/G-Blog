import type { AxiosResponse } from "axios";

/**
 * Model for axios requests.
 */
// Modelo para las peticiones axios.
export interface AxiosCall<T> {
  call: Promise<AxiosResponse<T>>;
  controller?: AbortController;
};
