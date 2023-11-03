"use client";

import { useAuth } from "@/hooks";
import { Any } from "./components";

/**
 * User profile component.
 */
// Componente del perfil del usuario.
export default function Profile(): JSX.Element {

    // Custom Hook para verificar si el usuario esta autenticado.
    useAuth({ redirectNotAuth: true });

    return (
        <>
        <h1 className="text-center text-4xl my-5 text-white"> Mi Perfil </h1>
        <Any />
        {/* <ImageChange
            imageState={user.profileImgUrl}
            alt={user.name}
        /> */}
        </>
    );

};