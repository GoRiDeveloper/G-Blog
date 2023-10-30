import Image from "next/image";
import type { FC } from "react";
import { StaticFilesPaths } from "@/models";
import { logoBlurUrl } from "../models";

/**
 * Application logo component.
 * 
 * @returns { JSX.Element } Application logo component.
 */
// Componente del logo de la aplicación.
export const Logo: FC = (): JSX.Element => {
    return (
        <figure
            className="
                absolute flex w-36 h-36 border-none
                bg-[#18003c] top-[-.1rem] z-30
                left-[-.1rem]
            "
            style={{ "clipPath": "polygon(100% 0,0 0,0 100%)" }}
        >
            <Image
                src={StaticFilesPaths.GORIDEV_LOGO}
                width={42}
                height={42}
                alt="Logo de GoRiDev"
                className="absolute top-6 left-6"
                style={{ width: 42, height: 42 }}
                priority
                placeholder="blur"
                blurDataURL={logoBlurUrl}
            />
        </figure>
    );
};
