import { redirect } from "next/navigation"
import { useEffect } from "react";
import { SnackbarManager } from "@/utils";
import { AppPath, AuthMessagesModel } from "@/models";
import { useAppSelector } from ".";

interface UseAuthHook {
    redirectNotAuth: boolean;
};

/**
 * Custom Hook to check if a user is authenticated.
 */
// Custom Hook para verificar si un usuario esta autenticado.
export const useAuth = ({ redirectNotAuth }: UseAuthHook) => {

    // Token del usuario en sesión.
    const { token } = useAppSelector((store) => store.user);

    /**
     * Condition to redirect the user or not.
     */
    // Condición para redirijir o no a el usuario.
    const condition = (redirectNotAuth && !token) || (!redirectNotAuth && token);

    useEffect(() => {

        // Verificamos si existe un token, para redirigir a la página principal
        // y avisar al usuario que tiene una sesión activa.
        if (condition) {

            // Verificamos el mensaje a enviar al usuario.
            !redirectNotAuth && token
                ? SnackbarManager.info(AuthMessagesModel.activeSession)
                : SnackbarManager.error(AuthMessagesModel.notAuth);

            redirect(AppPath.HOME);
            
        };

        return () => {};

    }, [token]);
    
};
