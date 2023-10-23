"use client";

import type { FC } from "react";
import type { ChildrenType } from "@/models";
import { AuthProvider } from "./auth.provider";

/**
 * Authentication section providers.
 * 
 * @param { ChildrenType } param0 - Default model of the properties of a component in React.
 * 
 * @returns { JSX.Element } Providers.
 */
// Componente de proveedores.
export const Providers: FC<ChildrenType> = (
    { children }: ChildrenType
): JSX.Element => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};
