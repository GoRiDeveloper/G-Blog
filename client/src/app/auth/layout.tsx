import type { Metadata } from "next";
import type { ChildrenType } from "@/models";
import { Providers } from "./providers";

export const metadata: Metadata = {
    title: "G-Blog - Autenticación"
};

export default function RootLayout({ children }: ChildrenType) {
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