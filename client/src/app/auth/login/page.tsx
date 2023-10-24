"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useAppSelector } from "@/hooks";
import { LoginForm, AuthLegend } from "../components";
import { SnackbarManager } from "@/utils";
import { AuthMessagesModel } from "../models";

/**
 * User authentication component.
 * 
 * @returns { JSX.Element } User authentication component.
 */
// Componente de autenticación de usuario.
export default function Login(): JSX.Element {

    // Token del usuario en sesión.
    const { token } = useAppSelector((store) => store.user);
    
    useEffect(() => {

        // Verificamos si existe un token, para redirigir a la página principal
        // y avisar al usuario que tiene una sesión activa.
        if (token) {
            SnackbarManager.info(AuthMessagesModel.activeSession);
            redirect("/");
        };

        return () => {};
        
    }, [token]);

    return (
        <section className="max-w-7xl my-0 mx-auto w-full h-screen grid place-content-center relative z-10">
            <article className="max-w-[31.25rem] md:w-[31.25rem] border border-white/[.2] text-white rounded-xl py-7 px-10 backdrop-blur-md shadow-md">
                <LoginForm />
                <AuthLegend legend="¿No tienes cuenta?" toRedirectMessage="Registrate" redirectHref="/auth/register" />
            </article>
        </section>
    );

};
