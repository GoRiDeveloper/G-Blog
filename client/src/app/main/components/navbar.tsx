"use client";

import type { FC } from "react";
import { NavMenuButton } from "./nav.menu.button";
import { useToggle } from "@/hooks";
import { NavbarList } from "./navbar.list"

/**
 * Component of the main navigation bar.
 * 
 * @returns { JSX.Element } Component of the main navigation bar.
 */
// Componente de la barra de navegacón principal.
export const Navbar: FC = (): JSX.Element => {

    // Estado para activar la barra de navegación principal.
    const { status, toggleStatus } = useToggle();

    return (
        <nav className="flex flex-col items-end">
            <NavMenuButton activeNavbar={status} handleActiveNavbar={toggleStatus} />
            <NavbarList activeNavbar={status} />
        </nav>
    );

};
