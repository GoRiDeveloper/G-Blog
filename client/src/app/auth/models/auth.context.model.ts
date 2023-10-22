import { RegisterUser, UserLogin } from "@/models";
import { ChangeInputEvent } from "@/types";

/**
 * Contract for the authentication context.
 */
// Contrato para el contexto de autenticación.
export interface AuthContextType {
    handleProfileImage: (e: ChangeInputEvent) => void;
    handleRegister: (data: FormData | RegisterUser) => Promise<void>;
    handleLogin:(data: UserLogin) => Promise<void>;
    profileImage: string;
    loadingEndpoint: boolean;
};