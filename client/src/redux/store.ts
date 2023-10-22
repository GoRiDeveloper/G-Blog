import { configureStore } from "@reduxjs/toolkit";
import type { InitAppStore } from "@/models";
import { user } from "@/redux/states/";
import { handlerDataInLocalStorage } from "@/redux/middlewares";

/**
 * Store configuration for global application states.
 */
// Configuración de la store para los estados globales de la aplicación.
export const makeStore = configureStore<InitAppStore>({
  reducer: {
    user,
  },
  middleware: [handlerDataInLocalStorage],
});
