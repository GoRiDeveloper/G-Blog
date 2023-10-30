/**
 * Application API base url variable.
 */
// Variable de la url base de la api de la aplicación.
export const BASE_URL = process.env.NEXT_PUBLIC_BLOG_API_URL;

/**
 * Variable of the base version of the api.
 */
// Variable de la versión base de la api.
export const BASE_VERSION = '/api/v1';

/**
 * Application main path variable.
 */
// Variable de la ruta principal de la aplicación.
export const BASE_PATH = `${BASE_URL}${BASE_VERSION}`;

/**
 * Enum of the application routes.
 */
// Enum de las rutas de la aplicación.
export enum API_PATHS {
    LOGIN_PATH = '/users/auth/sign-in',
    REGISTER_PATH = '/users/auth/sign-up',
}
