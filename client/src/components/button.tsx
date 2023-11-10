import type { FC, PropsWithChildren, MouseEventHandler } from "react";

interface ButtonProps {
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>
};

/**
 * Component of a generic button.
 * 
 * @param { ChildrenType | any } props - Default model of the properties of a component in React.
 * 
 * @returns { JSX.Element } Generic Button Component
 */
// Componente de un botón generico.
export const Button: FC<PropsWithChildren<ButtonProps>> = (
    props: PropsWithChildren
): JSX.Element => {
    return (
        <button {...props}>{props.children}</button>
    );
};