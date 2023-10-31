"use client";

import { useAuth } from "@/hooks";

/**
 * 
 */
// Componente del perfil del usuario
export default function Profile(): JSX.Element {

    // Custom Hook para verificar si el usuario esta autenticado.
    useAuth({ redirectNotAuth: true });

    return (
        <h1> Mi Perfil </h1>
    );

};