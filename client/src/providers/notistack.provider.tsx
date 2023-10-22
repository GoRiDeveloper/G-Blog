"use client";

import type { FC } from "react";
import { SnackbarProvider } from "notistack";
import type { ChildrenType } from "@/models";
import { SnackbarConfig } from "@/utils";

/**
 * Provider for configuring alerts in notistack.
 * 
 * @param { ChildrenType } param0 - Default model of the properties of a component in React.
 * 
 * @returns { JSX.Element } Provider for configuring alerts in notistack.
 */
// Proveedor para la configuración de alertas en notistack.
export const NotistackProvider: FC<ChildrenType> = (
    { children }: ChildrenType
): JSX.Element => {
    return (
        <SnackbarProvider>
            <SnackbarConfig />
            { children }
        </SnackbarProvider>
    );
};
