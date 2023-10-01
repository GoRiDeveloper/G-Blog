"use client";

import type { BaseSyntheticEvent } from "react"
import Link from "next/link";
import { redirect } from "next/navigation";
import type { RegisterUser } from "@/models";
import { Form, ImageChange, InputFile } from "@/components";
import { RegisterData } from "../consts";
import { useAppSelector } from "@/hooks";
import { useAuthContext } from "../hooks";
import { SnackbarManager } from "@/utils";

export default function Register() {
    const { token } = useAppSelector((store) => store.user);
    const { profileImage, loadingEndpoint, handleProfileImage, handleRegister } = useAuthContext();
    const handleSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        const { name, email, description, password, confirmPassword, profileImg } = e.target;

        if (password.value !== confirmPassword.value)
            return SnackbarManager.warning("Confirma corrctamente tu contraseña.");

        const data: RegisterUser = {
            name: name.value,
            email: email.value,
            description: description.value,
            password: password.value,
            profileImg: profileImg.files[0]
        };

        handleRegister(data);
    };
console.log({token});
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
                    <InputFile name="profileImg" multiple={false} accept="image/*" handleFile={handleProfileImage} />
                </Form>
                <fieldset className="mt-5 mb-3.5 text-center text-[.800rem] md:text-[.906rem]">
                    <legend> ¿Ya tienes una cuenta? <Link className="font-semibold hover:underline" href="/auth/login"> Inicia Sesión </Link> </legend>
                </fieldset>
            </article>
        </section>
    );

};