"use client";

import { Suspense } from "react";
import { useAuth } from "@/hooks";
import { ProfileSkeleton, User } from "./components";

/**
 * User profile component.
 */
// Componente del perfil del usuario.
export default function Profile(): JSX.Element {

    // Custom Hook para verificar si el usuario esta autenticado.
    const { token } = useAuth({ redirectNotAuth: true });

    return (
        <>
            <h1 className="text-center text-4xl my-5 text-white"> Mi Perfil </h1>
            <Suspense fallback={<ProfileSkeleton />} >
                <User token={token} />
            </Suspense>
        </>
    );

};