import { useContext } from "react";
import { AuthContext } from "../context/";

export const useAuthContext = () => {
  return useContext(AuthContext);
};
