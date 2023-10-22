"use client";

import { useContext } from "react";
import type { AuthContextType } from "../models";
import { AuthContext } from "../context/auth.context";

/**
 * Custom hook to get the authentication context.
 * 
 * @returns { AuthContextType } Authentication context.
 */
// Custom Hook para obtener el contexto de autenticación.
export const useAuthContext = (): AuthContextType => {
  return useContext(AuthContext);
};
