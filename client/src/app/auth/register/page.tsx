"use client";

import { useAuth } from "@/hooks";
import { AppPath } from "@/models";
import { AuthLegend, SignUpForm } from "../components";

/**
 * Registration Page Component.
 * 
 * @returns { JSX.Element } Registration Page Component.
 */
// Componente de registro de usuario.
export default function Register(): JSX.Element {

    // Custom Hook para verificar si el usuario esta autenticado.
    useAuth({ redirectNotAuth: false });

    return (
        <section className="max-w-7xl my-0 mx-auto w-full h-screen grid place-content-center relative z-10">
            <article className="
                register max-w-[31.25rem] max-h-[35rem] md:w-[31.25rem] border border-white/[.2]
                text-white rounded-xl py-7 px-10 backdrop-blur-md shadow-md overflow-hidden overflow-y-auto
            ">
                <SignUpForm />
                <AuthLegend legend="¿Ya tienes cuenta?" toRedirectMessage="Inicia Sesión" redirectHref={AppPath.LOGIN} />
            </article>
        </section>
    );
    
};
