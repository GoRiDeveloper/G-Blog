"use client";

import { useRouter } from "next/navigation";
import type { FC } from "react";
import { Button } from "@/components";
import { AppPath } from "@/models";
import { useUserActions } from "@/hooks";

export const CleanSessionBtn: FC = () => {

    // Función para remover la sesión del usuario en la aplicación.
    const { removeUser } = useUserActions();

    /**
     * App Router.
     */
    // Router de la aplicación.
    const router = useRouter();

    /**
     * Function to handle restarting the user session in the application.
     */
    // Función para manejar el reinicio de la sesión del usuario en la aplicación.
    const handlerCleanSession = (): void => {

        // Función para remover la sesión del usuario en la aplicación.
        removeUser();

        // Enviamos al usuario a que se autentique de nuevo en la aplicación.
        router.push(AppPath.LOGIN);

    };

    return (
        <Button
            onClick={handlerCleanSession}
            className="
                flex justify-center items-center h-8 bg-white shadow-xl w-44 mt-5
                rounded-[2.5rem] text-slate-700 font-semibold cursor-pointer md:mt-0
            "
        >
            Ingresa
        </Button>
    );
};
