import type { Email } from "@/types";
import { UserLogged } from ".";

/**
 * Contract to initialize the global states configuration in the application.
 */
// Contrato para inicializar la configuración de los estados globales en la aplicación.
export interface InitAppStore {
  user: typeof UserEmptyState;
};
/**
 * Initial user model in the application.
 */
// Modelo inicial del usuario en la aplicación.
export const UserEmptyState: UserLogged = {
    token: "",
    user: {
      name: "",
      email: "" as Email,
      description: "",
      profileImgUrl: "",
    },
};
