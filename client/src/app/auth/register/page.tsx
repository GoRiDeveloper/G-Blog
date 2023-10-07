"use client";

import type { BaseSyntheticEvent } from "react"
import Link from "next/link";
import { redirect } from "next/navigation";
import { Form, ImageChange, InputFile } from "@/components";
import { RegisterData } from "../consts";
import { useAppSelector } from "@/hooks";
import { useAuthContext } from "../hooks";
import { SnackbarManager } from "@/utils";

export default function Register() {
    const { profileImage, loadingEndpoint, handleProfileImage, handleRegister } = useAuthContext();
    const { token } = useAppSelector((store) => store.user);

    const handleSubmit = async (e: BaseSyntheticEvent) => {
        e.preventDefault();

        const form = new FormData();
        const { name, description, email, password, confirmPassword, profileImgUrl } = e.target;

        if (password.value !== confirmPassword.value)
            return SnackbarManager.warning("Confirma corrctamente tu contraseña.");

        form.append("name", name.value);
        form.append("description", description.value);
        form.append("email", email.value);
        form.append("password", password.value);
        form.append("profileImgUrl", profileImgUrl.files[0]);
        console.log(form.get("profileImgUrl"));
        
        handleRegister(form);
    };

    if (token) redirect("/");

    return (
        <section className="max-w-7xl my-0 mx-auto w-full h-screen grid place-content-center relative z-10">
            <article className="register max-w-[31.25rem] max-h-[35rem] md:w-[31.25rem] border border-white/[.2] text-white rounded-xl py-7 px-10 backdrop-blur-md shadow-md overflow-hidden overflow-y-auto">
                <Form title={RegisterData.name} fields={RegisterData.fields} loading={loadingEndpoint} onSubmit={handleSubmit}>
                    <fieldset className="flex justify-between mt-[-.938rem] mx-0 mb-[.938rem] text-[.800rem] md:text-[.906rem]">
                        <label className="cursor-pointer" htmlFor="remember">
                            <input className="me-[3px] cursor-pointer accent-white" type="checkbox" id="remember" />
                            {" "}Recuerdame
                        </label>
                    </fieldset>
                    <ImageChange imageState={profileImage} alt="foto del usuario" />
                    <InputFile name="profileImgUrl" multiple={false} accept="image/*" handleFile={handleProfileImage} />
                </Form>
                <fieldset className="mt-5 mb-3.5 text-center text-[.800rem] md:text-[.906rem]">
                    <legend> ¿Ya tienes una cuenta? <Link className="font-semibold hover:underline" href="/auth/login"> Inicia Sesión </Link> </legend>
                </fieldset>
            </article>
        </section>
    );
};