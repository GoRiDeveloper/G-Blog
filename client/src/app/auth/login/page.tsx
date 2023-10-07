"use client";

import type { BaseSyntheticEvent } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import type { UserLogin } from "@/models";
import { Form } from "@/components";
import { useAppSelector } from "@/hooks";
import { LoginData } from "../consts";
import { useAuthContext } from "../hooks";
import { SnackbarManager } from "@/utils";

export default function Login(): JSX.Element {
    const { loadingEndpoint, handleLogin } = useAuthContext();
    const { token } = useAppSelector((store) => store.user);

    const handleSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        if (token)
            return SnackbarManager.info("Tienes una sesión activa, cierra sesión y vuelve a iniciar sesión.");

        const data: UserLogin = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        handleLogin(data);
    };

    if (token) redirect("/");

    return (
        <section className="max-w-7xl my-0 mx-auto w-full h-screen grid place-content-center relative z-10">
            <article className="max-w-[31.25rem] md:w-[31.25rem] border border-white/[.2] text-white rounded-xl py-7 px-10 backdrop-blur-md shadow-md">
                <Form title={LoginData.name} fields={LoginData.fields} loading={loadingEndpoint} onSubmit={handleSubmit}>
                    <fieldset className="flex justify-between mt-[-.938rem] mx-0 mb-[.938rem] text-[.800rem] md:text-[.906rem]">
                        <label className="cursor-pointer" htmlFor="remember">
                            <input className="me-[3px] cursor-pointer accent-white" type="checkbox" id="remember" />
                            {" "}Recuerdame
                        </label>
                        <Link className="text-end hover:underline" href="/auth/register"> ¿Olvidaste tu contraseña? </Link>
                    </fieldset>
                </Form>
                <fieldset className="mt-5 mb-3.5 text-center text-[.800rem] md:text-[.906rem]">
                    <legend> ¿No tienes una cuenta? <Link className="font-semibold hover:underline" href="/auth/register"> Registrate </Link> </legend>
                </fieldset>
            </article>
        </section>
    );
};