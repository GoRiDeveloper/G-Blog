import axios from "axios";
import { loadAbort } from "@/utils";
import {
    BASE_PATH,
    API_PATHS,
    type User,
    type AxiosCall
} from "@/models";

interface UserResponse extends User {
    status: string;
    user: User
};

export const userInfo = (token: string): AxiosCall<UserResponse> => {

    // Controlador de la petición.
    const Controller = loadAbort();

    // Configuración de la petición.
    const config = {
        signal: Controller.signal,
        headers: {
            Authorization: `Bearer ${token}`
        },
    };

    // Devolvemos la información de la petición de autenticación.
    return {
        call: axios.get<UserResponse>(`${BASE_PATH}${API_PATHS.USER_INFO_PATH}`, config),
        controller: Controller
    };

};