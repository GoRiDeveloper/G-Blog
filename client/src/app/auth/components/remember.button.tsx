"use client";

import type { FC } from "react";
import { ChildrenType } from "@/models";

/**
 * Component for the checkbox to remember the session when authenticating.
 * 
 * @param { ChildrenType } param0 - Default model of the properties of a component in React.
 * 
 * @returns { JSX.Element }
 */
// Componente para el checkbox de recordar la sesión al autenticarse.
export const RememberButton: FC<ChildrenType> = (
    { children }: ChildrenType
): JSX.Element => {
    return (
        <fieldset className="
            flex justify-between mt-[-.938rem] mx-0 
            mb-[.938rem] text-[.800rem] md:text-[.906rem]
        ">
            <label className="cursor-pointer" htmlFor="remember">
                <input className="me-[3px] cursor-pointer accent-white" type="checkbox" id="remember" />
                {" "}Recuerdame
            </label>
            { children }
        </fieldset>
    );
};
