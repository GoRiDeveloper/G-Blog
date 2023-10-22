"use client";

import type { FC } from "react";
import type { ChildrenType } from "@/models";
import { StoreProvider } from "./store.provider";
import { NotistackProvider } from "./notistack.provider";

/**
 * Application providers component.
 *  
 * @param { ChildrenType } param0 - Default model of the properties of a component in React.
 * 
 * @returns Application providers component.
 */
// Componente de proveedores de la aplicación.
export const Providers: FC<any> = (
    { children }: ChildrenType
): JSX.Element => {
    return (
        <StoreProvider>
            <NotistackProvider>
                { children }
            </NotistackProvider>
        </StoreProvider>
    );
};
