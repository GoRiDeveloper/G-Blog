import type { ChildrenType } from "@/types";
import { AuthContextProvider } from "../context";

export const Providers = ({ children }: ChildrenType) => {
    return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    );
};