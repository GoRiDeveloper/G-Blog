"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useAppSelector } from "@/hooks";
import { SignUpForm } from "../components";

/**
 * Registration Page Component.
 * 
 * @returns { JSX.Element } Registration Page Component.
 */
// Componente de registro de usuario.
export default function Register(): JSX.Element {

    // Token del usuario en sesión.
    const { token } = useAppSelector((store) => store.user);

    // Verificamos si existe un token, para redirigir a la página principal.
    if (token) redirect("/");

    return (
        <section className="max-w-7xl my-0 mx-auto w-full h-screen grid place-content-center relative z-10">
            <article className="register max-w-[31.25rem] max-h-[35rem] md:w-[31.25rem] border border-white/[.2] text-white rounded-xl py-7 px-10 backdrop-blur-md shadow-md overflow-hidden overflow-y-auto">
                <SignUpForm />
                <fieldset className="mt-5 mb-3.5 text-center text-[.800rem] md:text-[.906rem]">
                    <legend> ¿Ya tienes una cuenta? <Link className="font-semibold hover:underline" href="/auth/login"> Inicia Sesión </Link> </legend>
                </fieldset>
            </article>
        </section>
    );
};