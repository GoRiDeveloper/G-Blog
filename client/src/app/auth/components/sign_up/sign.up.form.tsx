"use client";

import type { FC, BaseSyntheticEvent } from "react";
import { Form } from "@/components";
import { SnackbarManager } from "@/utils";
import { ProfileImgInput } from "./";
import { RememberButton } from "../";
import { useAuthContext } from "../../hooks";
import { RegisterData, AuthMessagesModel } from "../../models";

/**
 * Registration form component.
 *  
 * @returns { JSX.Element } Registration form component.
 */
// Componente del formulario de registro.
export const SignUpForm: FC = (): JSX.Element => {

    // Elementos del contexto de autenticación.
    const { loadingEndpoint, handleRegister } = useAuthContext();

    /**
     * Function to send the information of a user record.
     * 
     * @param { BaseSyntheticEvent } e - Synthetic event to control the submission of the form.
     * 
     * @returns { void } Promise of handling a user's registration.
     */
    // Función para enviar la información de un registro de usuario.
    const handleSubmit = async (e: BaseSyntheticEvent): Promise<void> => {

        // Prevenir la acción por defecto del evento.
        e.preventDefault();

        /**
         * Form to send.
         */
        // Formulario a enviar.
        const form = new FormData(e.target);

        // Contraseñas del formulario.
        const { password, confirmPassword } = e.target;

        // Verificamos la confirmación de contraseña.
        if (password.value === confirmPassword.value)
            // Función para manejar el envio del registro de usuario.
            handleRegister(form);
        
        // Modal para avisar al usuario que debe verificar sus contraseñas.
        SnackbarManager.warning(AuthMessagesModel.errorVerifyingYourPassword);

    };

    return (
        <Form title={RegisterData.name} fields={RegisterData.fields} loading={loadingEndpoint} onSubmit={handleSubmit}>
            <ProfileImgInput />
            <RememberButton>
                <></>
            </RememberButton>
        </Form>
    );
};
