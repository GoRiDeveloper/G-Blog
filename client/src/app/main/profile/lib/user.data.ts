import type { User } from "@/models";
import { userInfo } from "@/services";

/**
 * Function to request a user's information.
 * 
 * @param { string } token - User token.
 * 
 * @returns { Promise<User | null> } Null response or user information.
 */
// Función para hacer la petición de la información de un usuario.
export const getUserInfo = async (token: string): Promise<User | null> => {

    // Devolvemos una respuesta nula si no hay token.
    if (!token) return null;

    // Desestructuramos la petición y su controlador.
    const { call } = userInfo(token);

    try {

        // Desestructuramos la información obtenida de la petición.
        const { data } = await call;

        // Devolvemos la información obtenida de la petición.
        return data.user;

    } catch (error) { return null;};

};  