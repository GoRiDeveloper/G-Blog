import type { ChildrenType } from "@/models";
import { AuthContextProvider } from "../context";

export const Providers = ({ children }: ChildrenType) => {
    return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    );
};