"use client";

import type { FC } from "react";
import type { NavMenuButtonProps } from "@/models";
import { Button, MenuSVG, CloseSVG } from "@/components";

/**
 * Main navigation menu button component.
 * 
 * @param { NavMenuButtonProps } param0 - Props of the main navigation menu button.
 * 
 * @returns { JSX.Element } Main navigation menu button component.
 */
// Componente del boton del menu de navegación principal.
export const NavMenuButton: FC<NavMenuButtonProps> = ({
    activeNavbar,
    handleActiveNavbar
}: NavMenuButtonProps): JSX.Element => {
    return (
        <Button className="w-6 h-6 md:hidden" onClick={handleActiveNavbar}>
            {activeNavbar ? (
                <CloseSVG className="
                    transition-transform hover:scale-110 stroke-white
                    stroke-2 fill-white w-6 h-6
                " />
            ) : (
                <MenuSVG className="
                    transition-transform hover:scale-110 stroke-white
                    stroke-2 fill-white w-6 h-6
                " />
            )}
        </Button>
    );
};
