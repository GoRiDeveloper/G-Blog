import axios from "axios";
import type { RegisterUser, UserLogged, UserLogin } from "@/models/user.models";
import { loadAbort } from "@/utils";
import { AxiosCall } from "@/models";

/**
 * Service to auth a user in the application API.
 * 
 * @param { UserLogin } data - Auth a user in the application.
 * 
 * @returns { AxiosCall<UserLogged> } Login request information.
 */
// Servicio para autenticar a un usuario en la api de la aplicación.
export const login = (data: UserLogin): AxiosCall<UserLogged> => {

    // Controlador de la petición.
    const Controller = loadAbort();

    // Devolvemos la información de la petición de autenticación.
    return {
        call: axios.post<UserLogged>(
            "http://localhost:8080/api/v1/users/auth/sign-in",
            data,
            { signal: Controller.signal }
        ),
        controller: Controller,
    };
};

/**
 * Service to register a new user in the application API.
 * 
 * @param { FormData | RegisterUser } data - Registration of a new user.
 * 
 * @returns { IRequestService } Registration request information.
 */
// Servicio para registrar un nuevo usuario en la api de la aplicación.
export const register = (data: FormData | RegisterUser): AxiosCall<UserLogged> => {

    // Controlador de la petición.
    const Controller = loadAbort();

    // Configuración de la petición.
    const config = {
        signal: Controller.signal,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };

    // Devolvemos la información de la petición de registro.
    return {
        call: axios.post<UserLogged>(
            "http://localhost:8080/api/v1/users/auth/sign-up",
            data,
            config
        ),
        controller: Controller,
    };

};
