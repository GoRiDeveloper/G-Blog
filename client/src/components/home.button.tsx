import Link from "next/link";
import type { FC } from "react";
import { HomeSVG } from "./";
import { AppPath } from "@/models";

/**
 * Button component to return to the main page of the application.
 * 
 * @returns { JSX.Element } Button component to return to the main page of the application.
 */
// Componente del botón para regresar a la página principal de la aplicación.
export const HomeButton: FC = (): JSX.Element => {
    return (
        <Link
            className="
                fixed mt-6 ms-6 top-0 w-11 h-11 bg-white flex z-30
                justify-center items-center rounded-[2.5rem] cursor-pointer
                transition-transform opacity-50 hover:scale-110 hover:opacity-100
            "
            href={AppPath.HOME}
            scroll={false}
        >
            <HomeSVG className="w-6 h-6 fill-slate-700 stroke-slate-700 stroke-2 cursor-pointer" />
        </Link>
    );
};