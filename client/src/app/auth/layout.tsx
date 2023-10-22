import type { Metadata } from "next";
import type { ChildrenType } from "@/models";
import { Providers } from "./providers";

// Metadata para la pagina de autenticación de la aplicación.
export const metadata: Metadata = {
    title: "G-Blog - Autenticación"
};

/**
 * Function to create the auth component/layout of the application.
 * 
 * @param { ChildrenType } param0 - Default model of the properties of a component in React.
 * 
 * @returns { ChildrenType } Auth Component.
 */
// Función para crear el componente/layout
// de la página de autenticación de la aplicación.
export default function RootLayout(
    { children }: ChildrenType
): JSX.Element {
    return (
        <main className="bg-gradient-to-bl dark:from-sky-800 dark:via-purple-900 dark:to-sky-800">
            <Providers>
                {children}
                <div className="ocean max-w-full z-0 absolute bottom-0">
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            </Providers>
        </main>
    );
};