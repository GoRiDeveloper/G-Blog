"use client";
import { Provider } from "react-redux";
import type { ChildrenType } from "@/types";
import { makeStore } from "./store";

export const Providers = ({ children }: ChildrenType) => {
    return (
        <Provider store={makeStore}>
            {children}
        </Provider>
    );
};