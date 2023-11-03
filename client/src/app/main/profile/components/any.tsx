"use client";

import dynamic from "next/dynamic";
import type { FC } from "react";
import { ImageChange } from "@/components";
import { useAppSelector } from "@/hooks";

const Any: FC<any> = (): JSX.Element => {

    // Información del usuario autenticado.
    const { user } = useAppSelector(store => store.user);

    /**
     * Description of the user's photo.
     */
    // Descripción de la foto del usuario.
    const imgDescription = `foto del usuario ${user.name}`;

    return (
        <>
            <section>
                <div className="relative overflow-hidden">
                    <div className="relative z-10">
                        <ImageChange
                            imageState={user.profileImgUrl as string}
                            alt={imgDescription}
                        />
                    </div>
                    <div className="
                        absolute top-12 left-[-1rem] bg-[#18003c] h-[100px] w-[150%]
                        z-0 rotate-[-10deg] sm:hidden
                    "></div>
                </div>
                <h2 className="text-4xl text-center text-white">{ user.name }</h2>
            </section>
        </>
    );
};

export default dynamic(() => Promise.resolve(Any), { ssr: false });