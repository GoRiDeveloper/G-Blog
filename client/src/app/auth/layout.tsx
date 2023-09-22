import type { Metadata } from "next";
import type { ChildrenType } from "@/types/global.types";

export const metadata: Metadata = {
    title: "G-Blog - Autenticación"
};

export default function RootLayout({ children }: ChildrenType) {
    return (<div> {children} </div>);
};