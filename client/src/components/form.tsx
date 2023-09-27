"use client"

import type { FormEventHandler } from "react";

export const Form = ({ children, title, handleSubmit }: { children: React.ReactNode, title: string, handleSubmit: FormEventHandler<HTMLFormElement> }): JSX.Element => {
    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-4xl text-center">{title}</h1>
            {children}
        </form>
    );
};