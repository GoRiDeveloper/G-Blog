import type { Metadata } from "next";
import type { ChildrenType } from "@/types/global.types";

export const metadata: Metadata = {
    title: "G-Blog - Autenticación"
};

export default function RootLayout({ children }: ChildrenType) {
    return (
        <main className="w-screen bg-gradient-to-bl dark:from-sky-800 dark:via-purple-900 dark:to-sky-800">
            {children}
            <div className="ocean max-w-full">
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </main>
    );
};