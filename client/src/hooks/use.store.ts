import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import type { AppState, AppDispatch } from "@/types";

/**
 * Custom Hook to return a specific state from the application.
 */
// Custom Hook para devolver un estado específico de a aplicación.
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

/**
 * Custom Hook to dispatch an action from the global states of the application.
 */
// Custom Hook para despachar una acción de los estados globales de la aplicación.
export const useAppDispatch: () => AppDispatch = useDispatch;
