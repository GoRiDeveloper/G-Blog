/**
 * Function to get an axios request handler. 
 * 
 * @returns { AbortController } Axios request handler.
 */
// Función para obtener un controlador de peticiones axios.
export const loadAbort = (): AbortController => new AbortController();
