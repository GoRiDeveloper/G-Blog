import type { FC } from "react";
import { CleanSessionBtn } from "./";

/**
 * Session expired component.
 * 
 * @returns { JSX.Element } Session expired component.
 */
// Componente de sesión expirada.
export const SessionExpired: FC = (): JSX.Element => {
    return (
        <section className="w-full h-[50vh] flex flex-col column justify-center items-center gap-y-5">
            <h2 className="text-center text-white text-2xl"> Tu sesión ha expirado, vuelve a iniciar sesión. </h2>
            <CleanSessionBtn />
        </section>
    );
};