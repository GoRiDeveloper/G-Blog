"use client";

/**
 * Function to persist in Local Storage.
 * 
 * @param { string } key - Name with which it will be saved in Local Storage.
 * @param { string } value - Value to be saved in Local Storage.
 * 
 * @returns { void } Save to Local Storage functionality.
 */
// Función para persistir en Local Storage.
export const saveInLocalStorage = (key: string, value: string): void =>
  localStorage.setItem(key, value);

/**
 * Function to get a saved value from Localstorage.
 * 
 * @param { string } key - Saved value name.
 * 
 * @returns { any } Feature to get a saved value from Localstorage.
 */
// Función para obtener un valor guardado en Local Storage.
export const getInLocalStorage = (key: string): any => {
  if (typeof window !== "undefined" && window.localStorage) {
    const result = localStorage.getItem(key);
    return !!result && JSON.parse(result);
  };
};

/**
 * Function to delete a saved value from Local Storage.
 * 
 * @param { string } key - Saved value name.
 * 
 * @returns { void } Functionality to delete a saved value from Localstorage.
 */
// Función para eliminar de Local Storage un valor guardado.
export const removeInLocalStorage = (key: string): void =>
  localStorage.removeItem(key);

/**
 * Function to clean Local Storage.
 *  
 * @returns { void } Functionality to clean Local Storage.
 */
// Función para limpiar el Local Storage.
export const clearLocalStorage = (): void => localStorage.clear();
