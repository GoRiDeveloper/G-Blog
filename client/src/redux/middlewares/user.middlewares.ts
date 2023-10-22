import type { Middleware } from "@reduxjs/toolkit";
import { saveInLocalStorage, removeInLocalStorage } from "@/utils";
import { UserActionsModel } from "@/models";

/**
 * Middleware to control user data on local storage.
 * 
 * @returns { void } Handling data before performing an action in the global states of the application.
 */
// Middleware para controlar los datos del usuario en el almacenamiento local.
export const handlerDataInLocalStorage: Middleware =
  (store) => (next) => (action): void => {
  // BEFORE UPDATE STATE / ANTES DE ACTUALIZAR EL ESTADO

    /**
     * Create an array to determine the type of action to be performed on the user's global states in the application.
     */
    // Creamos un arreglo para determinar el tipo de acción que va a
    // realizarse en los estados globales del usuario en la aplicación.
    const actionType: string[] = action.type.split("/");

    // Dejamos que despache la respectiva funcionalidad.
    next(action);

  // AFTER UPDATE STATE / DESPUES DE ACTUALIZAR EL ESTADO

    // Verificamos si la acción es para crear un usuario en la aplicación.
    if (actionType[1] === UserActionsModel.createUser)
      // Guardamos a ese usuario en el Local Storage.
      saveInLocalStorage(actionType[0], JSON.stringify(store.getState()));

    // Verificamos si la acción es para eliminar a ese usuario en la aplicación.
    if (actionType[1] === UserActionsModel.resetUser)
      // Eliminamos a ese usuario del Local Storage.
      removeInLocalStorage(actionType[0]);
      
  };
