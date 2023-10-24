"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useAppSelector } from "@/hooks";
import { AuthLegend, SignUpForm } from "../components";
import { SnackbarManager } from "@/utils";
import { AuthMessagesModel } from "../models";

/**
 * Registration Page Component.
 * 
 * @returns { JSX.Element } Registration Page Component.
 */
// Componente de registro de usuario.
export default function Register(): JSX.Element {

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
            <article className="register max-w-[31.25rem] max-h-[35rem] md:w-[31.25rem] border border-white/[.2] text-white rounded-xl py-7 px-10 backdrop-blur-md shadow-md overflow-hidden overflow-y-auto">
                <SignUpForm />
                <AuthLegend legend="¿Ya tienes cuenta?" toRedirectMessage="Inicia Sesión" redirectHref="/auth/login" />
            </article>
        </section>
    );
    
};
