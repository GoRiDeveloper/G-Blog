import Link from "next/link";
import {
    Form,
    Button,
    Input,
    MailSVG,
    LockSVG
} from "@/components";

export default function Login(): JSX.Element {

    const handleSubmit = (e: any) => {
        console.log(e);
    };

    return (
        <section className="max-w-7xl my-0 mx-auto w-full h-screen grid place-content-center relative z-10">
            <article className="max-w-[31.25rem] md:w-[31.25rem] border border-white/[.2] text-white rounded-xl py-7 px-10 backdrop-blur-md shadow-md">
                <Form title="Iniciar Sesión" handleSubmit={handleSubmit}>
                    <Input type="email" placeholder="E-Mail :" required>
                        <MailSVG className="w-6 h-6 fill-white absolute right-5 top-2/4 translate-y-[-50%]" />
                    </Input>
                    <Input type="password" placeholder="Contraseña :" required>
                        <LockSVG className="w-6 h-6 fill-white absolute right-5 top-2/4 translate-y-[-50%]" />
                    </Input >
                    <fieldset className="flex justify-between mt-[-.938rem] mx-0 mb-[.938rem] text-[.800rem] md:text-[.906rem]">
                        <label className="cursor-pointer" htmlFor="remember">
                            <input className="me-[3px] cursor-pointer accent-white" type="checkbox" id="remember" />
                            {" "}Recuerdame
                        </label>
                        <Link className="text-end hover:underline" href="/auth/register"> ¿Olvidaste tu contraseña? </Link>
                    </fieldset>
                    <Button className="w-full h-11 bg-white rounded-[2.5rem] text-slate-700 shadow-xl font-semibold" type="submit"> Iniciar Sesión </Button>
                    <fieldset className="mt-5 mb-3.5 text-center text-[.800rem] md:text-[.906rem]">
                        <legend> ¿No tienes una cuenta? <Link className="font-semibold hover:underline" href="/auth/register"> Registrate </Link> </legend>
                    </fieldset>
                </Form>
            </article>
        </section>
    );
};