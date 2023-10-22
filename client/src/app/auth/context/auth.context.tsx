"use client";

import {
  createContext,
  useState,
  useCallback,
  useMemo,
  type Context,
  type FC
} from "react";
import type { ChangeInputEvent } from "@/types";
import type { ChildrenType, RegisterUser, UserLogged, UserLogin } from "@/models";
import { createUserAdapter } from "@/adapters";
import { useFetchAndLoad, useUserActions } from "@/hooks";
import { login, register } from "@/services";
import { AxiosInterceptor } from "@/interceptors";
import { StaticFilesPaths, type AuthContextType } from "../models";

// Interceptor de solicitudes http realizadas con axios.
AxiosInterceptor();

/**
 * Creation of the authentication context in the application.
 */
// Contexto de autenticación en la aplicación.
export const AuthContext: Context<AuthContextType> =
  createContext<AuthContextType>({} as AuthContextType);
  
/**
 * The provider of the application's authentication context.
 * 
 * @param { ChildrenType } param0 - Default model of the properties of a component in React.
 * 
 * @returns The provider of the application's authentication context.
 */
// Proveedor del contexto de autentcación de la aplicación.
export const AuthContextProvider: FC<ChildrenType> = (
  { children }: ChildrenType
): JSX.Element => {

  // Función para guardar la sesión del usuario en la aplicación.
  const { setUser } = useUserActions();

  // Estado para guardar la ruta de la previsualización
  // de la imagen en el formulario registro.
  const [profileImage, setProfileImage] = useState<string>(
    StaticFilesPaths.USER_IMG_DEFAULT
  );

  // Loader y Función de la petición del Custom Hook de Axios.
  const { loading: loadingEndpoint, callEndpoint } = useFetchAndLoad();

  /**
   * Function to manage preview status of the registration form image.
   * 
   * @param { ChangeInputEvent } e - Event to handle the change of an input.
   * 
   * @returns { void } Functionality to change image path state.
   */
  // Función para manejar el estado de la previsualización
  // de la imagen del formulario de registro.
  const handleProfileImage = useCallback(
    (e: ChangeInputEvent): void => {
    /**
     * File saved in file type input.
     */
    // Archivo guardado en el input de tipo file.
    const fileBounded = e.target.files![0];
    /**
     * Local path of the image of the file type input image.
     */
    // Ruta local de la imagen de la imagen del input de tipo file.
    const filePath = URL.createObjectURL(fileBounded);

    // Función para cambiar el estado de la previsualización
    // de la imagen del formulario de registro.
    setProfileImage(filePath);
    }, []
  );

  /**
   * Function to register a new user.
   * 
   * @param { FormData | RegisterUser } user - Model or form with the registration information of a new user.
   * 
   * @returns { Promise<void> } Functionality to register a new user.
  */
  // Función para realizar el registro de un nuevo usuario.
  const handleRegister = useCallback(
    async (user: FormData | RegisterUser): Promise<void> => {

      /**
       * Function to make an http request.
       */
      // Función para hacer una petición http.
      const response = await callEndpoint(register(user));

      // Verificamos la información de la respuesta de la petición.
      if (response?.data) {

        /**
         * Function to adapt the information of a registered user.
         */
        // Función para adaptar la información de un usuario registrado.
        const newUser = createUserAdapter(response?.data as UserLogged);

        // Función para cambiar la sesión del usuario en la aplicación.
        setUser(newUser);

      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  );

  /**
   * Function to authenticate a user in the application.
   * 
   * @param { UserLogin } user - Model with the information of an existing user to authenticate.
   * 
   * @returns { Promise<void> } Functionality to authenticate a user.
   */
  // Función para autenticar un usuario en la aplicación.
  const handleLogin = useCallback(
    async (user: UserLogin): Promise<void> => {

      /**
      * Function to make an http request.
      */
      // Función para hacer una petición http.
      const response = await callEndpoint(login(user));

      // Verificamos la información de la respuesta de la petición.
      if (response?.data) {

        /**
         * Function to adapt the information of a auth user.
         */
        // Función para adaptar la información de un usuario autenticado.
        const userLogged = createUserAdapter(response?.data);

        // Función para cambiar la sesión del usuario en la aplicación.
        setUser(userLogged);

      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  );

  /**
  * Memorization of the authentication context.
  */
  // Memorización del contexto de autenticación.
  const value = useMemo(
    () => ({
      handleProfileImage,
      handleRegister,
      handleLogin,
      profileImage,
      loadingEndpoint
    }),
    [profileImage, loadingEndpoint, handleProfileImage, handleRegister, handleLogin]
  );

  return (<AuthContext.Provider value={value}> {children} </AuthContext.Provider>);
};
