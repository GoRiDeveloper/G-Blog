import Link from "next/link";
import type { FC } from "react";
import type { NavigatorProps } from "@/models";

/**
 * Generic component for a route navigator.
 * 
 * @param { NavigatorProps } param0 - Generic props for a route navigator.
 * 
 * @returns { JSX.Element } Generic component for a route navigator.
 */
// Componente génerico para un navegador de rutas.
export const Navigator: FC<NavigatorProps> = ({
    pathNames,
    classNames
}: NavigatorProps): JSX.Element => {
    return (
        <>
            {pathNames.map(({ id, path, name }) => (
                <li key={id} className={classNames.linkClass}>
                    <Link className={classNames.anchorTagClass} href={path}>
                        {name}
                    </Link>
                </li>
            ))}
        </>
    );
};
