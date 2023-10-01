"use client";

import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import type { ChildrenType } from "@/models";
import { makeStore } from "./store";
import { SnackbarConfig } from "@/utils";

export const Providers = ({ children }: ChildrenType) => {
    return (
        <Provider store={makeStore}>
            <SnackbarProvider>
                <SnackbarConfig />
                {children}
            </SnackbarProvider>
        </Provider>
    );
};