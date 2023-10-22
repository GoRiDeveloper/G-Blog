"use client";

import type { FC } from "react";
import type { InputProps } from "@/models";

/**
 * Component of a generic input.
 * 
 * @param { InputProps } param0 - Props a generic input.
 * 
 * @returns { JSX.Element } Component of a generic input.
 */
// Componente de un input génerico.
export const Input: FC<InputProps> = ({
    children,
    type,
    name,
    placeholder,
    required
}: InputProps): JSX.Element => {
    return (
        <fieldset className="h-[3.15rem] relative my-[1.875rem]">
            <input
                className="w-full h-full bg-transparent py-5 ps-5 pe-11 outline-none text-base text-white border border-white/[.2] rounded-[2.5rem] placeholder:text-white"
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                autoComplete="on"
            />
            {children}
        </fieldset>
    );
};