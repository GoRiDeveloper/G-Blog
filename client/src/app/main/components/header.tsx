import type { FC } from "react";
import { Navbar } from "./navbar";
import { Logo } from "./";

/**
 * Main app header.
 *  
 * @returns { JSX.Element } Main app header.
 */
// Header principal 
export const Header: FC = (): JSX.Element => {
    return (
        <header className="
            sticky py-7 px-10 border-b border-white/[.2]
            text-white backdrop-blur-md shadow-md w-full
        ">
            <Logo />
            <Navbar />
        </header>
    );
};
