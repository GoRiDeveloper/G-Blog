import type { ThunkAction, Action } from "@reduxjs/toolkit";
import type { makeStore } from "@/redux/store";

/**
 * Type for global states of the application.
 */
// Tipado para los estados globales de la aplicación.
export type AppState = ReturnType<typeof makeStore.getState>;

/**
 * Type for the actions of the global states of the application.
 */
// Tipado para las acciones de los estados globales de la aplicación.
export type AppDispatch = typeof makeStore.dispatch;

/**
 * Typing for the application of global states.
 */
// Tipado para la aplicación de estados globales.
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
