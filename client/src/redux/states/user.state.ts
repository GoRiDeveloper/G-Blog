import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { UserEmptyState, LocalStorageEntities, type UserLogged } from "@/models";
import { getInLocalStorage } from "@/utils";

/**
 * Get the token if there is an authenticated user in the application.
 */
// Obtenemos el token si hay un usuario autenticado en la aplicación.
const session = getInLocalStorage(LocalStorageEntities.USER) as UserLogged;

/**
 * Slice to configure the state of global users.
 */
// Slice para configurar el estado de usuarios globales.
export const userSlice = createSlice({

  // Nombre del estado global.
  name: LocalStorageEntities.USER,

  // Estado inicial del estado global.
  initialState: session ? session : UserEmptyState,

  // Funcionalidades/Acciones del estado global.
  reducers: {

    /**
     * Function to create a new user in the global state.
     * 
     * @param { UserLogged } _state - Global User State.
     * @param { PayloadAction<UserLogged> } action - Action to perform in the user state.
     * 
     * @returns { UserLogged } User created.
     */
    // Función para crear un nuevo usuario en el estado global.
    createUser: (_state, action: PayloadAction<UserLogged>): UserLogged => action.payload,

    /**
     * Function to modify a user in the global state.
     * 
     * @param { UserLogged } state - Global User State.
     * @param { PayloadAction<UserLogged> } action - Action to perform in the user state.
     * 
     * @returns { any } Modified user.
     */
    // Función para modificar un usuario en el estado global.
    modifyUser: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },

    /**
     * Function to delete a user from the global state.
     * 
     * @returns { UserLogged } Empty user.
     */
    // Función para borrar a un usuario del estado global.
    resetUser: (): UserLogged => UserEmptyState,

  },

});

// Acciones para manipular el estado global del usuario.
export const { createUser, modifyUser, resetUser } = userSlice.actions;

// Devolvemos el reducer del Slice.
export default userSlice.reducer;
