"use client";
import Link from "next/link";
// import { useDispatch } from "react-redux";
// import { useFetchAndLoad } from "@/hooks/";
import { Button } from "@/components/button";
import { MailSVG, LockSVG } from "@/components/svgs";
// import { login } from "@/services/public.services";
// import { createUserAdapter } from "@/adapters";
// import { createUser } from "@/redux/states/user.state";

export default function Login() {
    // const { loading, callEndpoint } = useFetchAndLoad();
    // const dispatch = useDispatch();
    // const handleClick = async (data: any) => {
    //     const user = await callEndpoint(login(data));
    //     const newUser = createUserAdapter(user);
    //     dispatch(createUser(newUser));
    // };

    return (
        <section className="max-w-7xl my-0 mx-auto w-full h-screen grid place-content-center">
            <article className="max-w-[31.25rem] md:w-[31.25rem] text-white">
                <form action="">
                    <h1 className="text-4xl text-center"> Iniciar Sesión </h1>
                    <fieldset className="h-[3.15rem] relative my-[1.875rem]">
                        <input className="w-full h-full bg-transparent py-5 ps-5 pe-11 outline-none text-base text-white border border-white/[.2] rounded-[2.5rem] placeholder:text-white" type="email" placeholder="Ingresa tu E-Mail:" required/>
                        <MailSVG className="w-6 h-6 fill-white absolute right-5 top-2/4 translate-y-[-50%]" />
                    </fieldset>
                    <fieldset className="h-[3.15rem] relative my-[1.875rem]">
                        <input className="w-full h-full bg-transparent py-5 ps-5 pe-11 outline-none text-base text-white border border-white/[.2] rounded-[2.5rem] placeholder:text-white" type="password" placeholder="Ingresa tu Contraseña:" required/>
                        <LockSVG className="w-6 h-6 fill-white absolute right-5 top-2/4 translate-y-[-50%]" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" />
                        </label>
                    </fieldset>
                    <Button className="" type="submit"> Iniciar Sesión </Button>
                    <fieldset>
                        <legend> ¿No tienes una cuenta?<Link href="/auth/register"> Registrate </Link> </legend>
                    </fieldset>
                </form>
            </article>
        </section>
    );
};