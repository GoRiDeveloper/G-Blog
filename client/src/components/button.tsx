"use client";
import type { ChildrenType } from "@/types";

export const Button = (props: any | ChildrenType) => {
    return (
        <button {...props}>{props.children}</button>
    );
};