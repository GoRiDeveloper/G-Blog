"use client"
import type { InputProps } from "@/types";

export const Input = ({ children, type, placeholder, required }: InputProps): JSX.Element => {
    return (
        <fieldset className="h-[3.15rem] relative my-[1.875rem]">
            <input
                className="w-full h-full bg-transparent py-5 ps-5 pe-11 outline-none text-base text-white border border-white/[.2] rounded-[2.5rem] placeholder:text-white"
                type={type}
                placeholder={placeholder}
                required={required}
            />
            {children}
        </fieldset>
    );
};