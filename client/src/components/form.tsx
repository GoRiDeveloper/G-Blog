"use client";

import type { FC } from "react";
import type { GenericForm } from "@/models";
import { Button, LoaderSVG } from "@/components";
import { Input } from "./";

/**
 * Generic form component.
 * 
 * @param { GenericForm } param0 - Proops a generic form.
 * 
 * @returns { JSX.Element } Generic form component.
 */
// Componente de un formulario génerico.
export const Form: FC<GenericForm> = ({
    children,
    title,
    fields,
    loading,
    encType,
    onSubmit
}: GenericForm): JSX.Element => {
    // const handleInputChange = (e: ChangeInputEvent) => {
    //     const { name, value, type, files, multiple } = e.target;
    //     const existsFiles = (type === "file" && multiple && files);
    //     const inputValue = existsFiles ? Array.from(files) : value;

    //     setFormData({ ...formData, [name]: inputValue });
    // };

    return (
        <form onSubmit={onSubmit} encType={encType}>
            <h1 className="text-4xl text-center">{title}</h1>
            {fields.map(({
                type,
                name,
                placeholder,
                required,
                icon: Icon
            }) => (
                <Input
                    key={name}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    name={name}
                >
                    {Icon && (<Icon className="w-6 h-6 fill-white absolute right-5 top-2/4 translate-y-[-50%]" />)}
                </Input>
            ))}
            {children}
            <Button className="flex justify-center items-center w-full h-11 mb-9 bg-white rounded-[2.5rem] text-slate-700 shadow-xl font-semibold" type="submit">
                {title}
                {loading && (
                    <svg className="animate-spin h-5 w-5 ml-1.5 ..." viewBox="0 0 24 24">
                        <LoaderSVG />
                    </svg>
                )}
            </Button>
        </form>
    );
};