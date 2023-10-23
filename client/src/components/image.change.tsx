"use client";

import type { FC } from "react";
import Image from "next/image";
import type { GenericImageChange } from "@/models";

/**
 * Component of a generic image.
 * 
 * @param { GenericImageChange } param0 - Props a generic image change.
 * 
 * @returns { JSX.Element } Component of a generic image.
 */
// Componente de una imagen génerica.
export const ImageChange: FC<GenericImageChange> = ({
    imageState,
    alt
}: GenericImageChange): JSX.Element => {
    return (
        <figure className="
            shw-img w-[9rem] h-[9rem] my-[1.875rem] border 
            border-white/[.2] overflow-hidden relative left-2/4 
            translate-x-[-50%] flex justify-center items-center 
            rounded-[50%] before:bg-blue-400
        ">
            <Image
                className="w-full h-full object-cover object-center"
                src={imageState}
                alt={alt}
                width={500}
                height={500}
            />
        </figure>
    );
};
