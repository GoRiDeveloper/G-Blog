import { AxiosError } from "axios";
import type { User } from "@/models";
import { userInfo } from "@/services";
import { SnackbarManager, getValidationError } from "@/utils";
import { NextResponse } from "next/server";

/**
 * Function to request a user's information.
 * 
 * @param { string } token - User token.
 * 
 * @returns { Promise<User | null> } Null response or user information.
 */
// Función para hacer la petición de la información de un usuario.
export const getUserInfo = async (token: string): Promise<User | any> => {

    // Desestructuramos la petición y su controlador.
    const { call, controller } = userInfo(token);

    try {

        // Desestructuramos la información obtenida de la petición.
        const { data } = await call;

        // Devolvemos la información obtenida de la petición.
        return data;

    } catch (error) { return null;};

};  