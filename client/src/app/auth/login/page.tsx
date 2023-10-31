"use client";

import { useAuth } from "@/hooks";
import { AppPath } from "@/models";
import { LoginForm, AuthLegend } from "../components";

/**
 * User authentication component.
 * 
 * @returns { JSX.Element } User authentication component.
 */
// Componente de autenticación de usuario.
export default function Login(): JSX.Element {

    // Custom Hook para verificar si el usuario esta autenticado.
    useAuth({ redirectNotAuth: false });

    return (
        <section className="max-w-7xl my-0 mx-auto w-full h-screen grid place-content-center relative z-10">
            <article className="max-w-[31.25rem] md:w-[31.25rem] border border-white/[.2] text-white rounded-xl py-7 px-10 backdrop-blur-md shadow-md">
                <LoginForm />
                <AuthLegend legend="¿No tienes cuenta?" toRedirectMessage="Registrate" redirectHref={AppPath.REGISTER} />
            </article>
        </section>
    );

};
