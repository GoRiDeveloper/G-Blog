"use client";

import Link from "next/link";
import type { FC } from "react";
import type { AuthLegendProps } from "../models";

/**
 * Legend component in authentication forms.
 * 
 * @param { AuthLegendProps } param0 - Properties to build the legend in the component.
 * 
 * @returns { JSX.Element } Legend component in authentication forms.
 */
// Componente de la leyenda en los formularios de autenticación.
export const AuthLegend: FC<AuthLegendProps> = ({
    legend,
    toRedirectMessage,
    redirectHref
}: AuthLegendProps): JSX.Element => {
    return (
        <fieldset className="mt-5 mb-3.5 text-center text-[.800rem] md:text-[.906rem]">
            <legend> { legend }
                <Link className="font-semibold hover:underline" href={redirectHref}>
                    {" "}{ toRedirectMessage }
                </Link>
            </legend>
        </fieldset>
    );
};
