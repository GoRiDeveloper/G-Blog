import { RegisterUser, UserLogin } from "@/models";
import { ChangeInputEvent } from "@/types";

/**
 * Contract for the authentication context.
 */
// Contrato para el contexto de autenticación.
export interface AuthContextType {

    /**
     * Function to manage preview status of the registration form image.
     * 
     * @param { ChangeInputEvent } e - Event to handle the change of an input.
     * 
     * @returns { void } Functionality to change image path state.
     */
    // Función para manejar el estado de la previsualización
    // de la imagen del formulario de registro.
    handleProfileImage: (e: ChangeInputEvent) => void;

    /**
     * Function to register a new user.
     * 
     * @param { FormData | RegisterUser } user - Model or form with the registration information of a new user.
     * 
     * @returns { Promise<void> } Functionality to register a new user.
     */
    // Función para realizar el registro de un nuevo usuario.
    handleRegister: (data: FormData | RegisterUser) => Promise<void>;

    /**
     * Function to authenticate a user in the application.
     * 
     * @param { UserLogin } user - Model with the information of an existing user to authenticate.
     * 
     * @returns { Promise<void> } Functionality to authenticate a user.
     */
    // Función para autenticar un usuario en la aplicación.
    handleLogin:(data: UserLogin) => Promise<void>;

    /**
     * Profile image path.
     */
    // Ruta de la imagen de perfil.
    profileImage: string;

    /**
     * Boolean that shows if the request is in progress.
     */
    // Boleano que muestra si la petición esta en curso.
    loadingEndpoint: boolean;

};
