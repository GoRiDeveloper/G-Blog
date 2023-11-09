import { AppPath } from "@/models";
import Link from "next/link";
import type { FC } from "react";

/**
 * Session expired component.
 * 
 * @returns { JSX.Element } Session expired component.
 */
// Componente de sesión expirada.
export const SessionExpired: FC = (): JSX.Element => {
    return (
        <section className="w-full h-[50vh] flex flex-col column justify-center items-center gap-y-5">
            <h2 className="text-center text-white text-2xl"> Tu sesión ha expirado, vuelve a iniciar sesión. </h2>
            <Link
                href={AppPath.LOGIN}
                className="
                    flex justify-center items-center h-8 bg-white shadow-xl w-44 mt-5
                    rounded-[2.5rem] text-slate-700 font-semibold cursor-pointer md:mt-0
                "
            >
                Ingresar
            </Link>
        </section>
    );
};