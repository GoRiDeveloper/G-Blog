import Link from "next/link";
import { FC } from "react";
import { Navigator } from "@/components";
import { AppPath, NavbarListProps } from "@/models";
import { NavbarListLinks, NavbarListLinksClassNames } from "../models";

/**
 * Links component of the main navigation bar.
 * 
 * @returns { JSX.Element } Links component of the main navigation bar.
 */
// Componente de los links de la barra de navegación principal.
export const NavbarList: FC<NavbarListProps> = (
    { activeNavbar }: NavbarListProps
): JSX.Element => {
    return (
        <ul className={`
            ${!activeNavbar && "hidden"} md:flex-row
            md:justify-end md:gap-x-4 md:flex
            w-full flex flex-col items-center gap-y-2.5
        `}>
            <Navigator 
                pathNames={NavbarListLinks}
                classNames={NavbarListLinksClassNames}
            />
            <Link
                href={AppPath.LOGIN}
                className="
                    flex justify-center items-center h-8 bg-white shadow-xl w-44 mt-5
                    rounded-[2.5rem] text-slate-700 font-semibold cursor-pointer md:mt-0
                "
            >
                Ingresar
            </Link>
        </ul>
    );
};
