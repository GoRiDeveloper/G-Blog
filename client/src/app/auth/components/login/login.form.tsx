"use client";

import Link from "next/link";
import type { BaseSyntheticEvent, FC } from "react";
import type { UserLogin } from "@/models";
import { Form } from "@/components";
import { RememberButton } from "../";
import { useAuthContext } from "../../hooks";
import { LoginData } from "../../models";

/**
 * Form component to authenticate.
 * 
 * @returns { JSX.Element }
 */
// Componente del formulario para autenticarse.
export const LoginForm: FC = (): JSX.Element => {

    // Elementos del contexto de autenticación.
    const { loadingEndpoint, handleLogin } = useAuthContext();

    /**
     * Function to send a user's information to authenticate.
     * 
     * @param { BaseSyntheticEvent } e - Synthetic event to control the submission of the form.
     * 
     * @returns { void } Promise to authenticate a user.
     */
    // Función para enviar la información de un usuario para autenticarse.
    const handleSubmit = (e: BaseSyntheticEvent): void => {

        // Prevenir la acción por defecto del evento.
        e.preventDefault();

        /**
         * Model of a user to authenticate.
         */
        // Modelo de un usuario a autenticarse.
        const data: UserLogin = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        /**
         * Function to authenticate a user in the application. 
         */
        // Función para autenticar un usuario en la aplicación.
        handleLogin(data);

    };

    return (
        <Form title={LoginData.name} fields={LoginData.fields} loading={loadingEndpoint} onSubmit={handleSubmit}>
            <RememberButton>
                <Link className="text-end hover:underline" href="/auth/register"> ¿Olvidaste tu contraseña? </Link>
            </RememberButton>
        </Form>
    );
};
