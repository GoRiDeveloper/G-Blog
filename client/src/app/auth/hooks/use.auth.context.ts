"use client";

import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export const useAuthContext = () => {
  return useContext(AuthContext);
};
