"use client";

import type { FC } from "react";
import { Provider } from "react-redux";
import type { ChildrenType } from "@/models";
import { makeStore } from "@/redux/store";

/**
 * Global/store state provider component in the application.
 * 
 * @param param0 - Default model of the properties of a component in React.
 * 
 * @returns { JSX.Element } Global/store state provider component in the application.
 */
// Componente de proveedor del estado global/store en la aplicación.
export const StoreProvider: FC<ChildrenType> = (
    { children }: ChildrenType
): JSX.Element => {
    return (
        <Provider store={makeStore}>
            {children}
        </Provider>
    );
};