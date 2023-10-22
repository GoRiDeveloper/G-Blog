"use client";

import { FC } from "react";
import type { ChildrenType } from "@/models";

/**
 * Component of a generic button.
 * 
 * @param { ChildrenType | any } props - Default model of the properties of a component in React.
 * 
 * @returns { JSX.Element } Generic Button Component
 */
// Componente de un botón generico.
export const Button: FC<ChildrenType | any> = (
    props: ChildrenType | any
): JSX.Element => {
    return (
        <button {...props}>{props.children}</button>
    );
};