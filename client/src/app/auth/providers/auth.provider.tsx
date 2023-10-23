"use client";

import type { FC } from "react";
import type { ChildrenType } from "@/models";
import { AuthContextProvider } from "../context";

/**
 * Auth context provider component.
 * 
 * @param { ChildrenType } param0 - Default model of the properties of a component in React.
 * 
 * @returns { JSX.Element } Auth context provider component.
 */
// Componente proveedor del contexto de autenticación.
export const AuthProvider: FC<ChildrenType> = (
    { children }: ChildrenType
): JSX.Element => {
    return (
        <AuthContextProvider>
            { children }
        </AuthContextProvider>
    );
};
