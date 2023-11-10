import type { UserLogged } from "@/models";
import { useAppDispatch } from "./";
import { createUser, modifyUser, resetUser } from "@/redux/states/user.state";

/**
 * Custom Hook to obtain the functionalities to manipulate user states in the application.
 * 
 * @returns The functionalities available to manipulate the state of users in the application.
 */
// Custom hook para obtener las funcionalidades para manipular los estados de los usuarios en la aplicacion.
export const useUserActions = () => {

  // Despachador de las funcionalidades de los estados globales de la aplicación.
  const dispatch = useAppDispatch();

  /**
   * Function to create a new user in the global state of the application.
   * 
   * @param { UserLogged } newUser - Model of an authenticated user.
   * 
   * @returns Funcionality to create a new user in the global state of the application.
   */
  // Función para crear un nuevo usuario en el estado global de la aplicación.
  const setUser = (newUser: UserLogged) => dispatch(createUser(newUser));

  /**
   * Function to restart the user in session.
   * 
   * @returns Functionality to remove the user session.
   */
  // Función para reiniciar el usuario en sesión.
  const removeUser = () => dispatch(resetUser());

  // Devolvemos las funcionalidades para manipular los estados de los usuarios en la aplicacion.
  return { setUser, removeUser };
  
};
