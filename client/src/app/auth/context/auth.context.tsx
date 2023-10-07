"use client";

import {
  createContext,
  useState,
  useCallback,
  useMemo,
  FC
} from "react";
import type { ChangeInputEvent } from "@/types";
import type{ ChildrenType, RegisterUser, UserLogin } from "@/models";
import { createUserAdapter } from "@/adapters";
import { useFetchAndLoad, useUserActions } from "@/hooks";
import { login, register } from "@/services/public.services";
import { AxiosInterceptor } from "@/interceptors";

AxiosInterceptor();

type AuthContextType = {
  handleProfileImage: (e: ChangeInputEvent) => void;
  handleRegister: (data: FormData) => Promise<void>;
  handleLogin:(data: UserLogin) => Promise<void>;
  profileImage: string;
  loadingEndpoint: boolean;
};

export const AuthContext =
  createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider: FC<ChildrenType> = ({ children }: ChildrenType): JSX.Element => {
  const { setUser } = useUserActions();
  const [profileImage, setProfileImage] = useState<string>(
    "/assets/img/default-user.webp"
  );
  const { loading: loadingEndpoint, callEndpoint } = useFetchAndLoad();

  const handleProfileImage = useCallback((e: ChangeInputEvent) => {
    const fileBounded = e.target.files![0];
    const filePath = URL.createObjectURL(fileBounded);

    setProfileImage(filePath);
  }, []);
  const handleRegister = useCallback(async (user: FormData | RegisterUser) => {
    const response = await callEndpoint(register(user));
    if (response?.data) {
      const newUser = createUserAdapter(response?.data);
      setUser(newUser);
    };
  }, []);
  const handleLogin = useCallback(async (user: UserLogin) => {
    const response = await callEndpoint(login(user));
    if (response?.data) {
      const userLogged = createUserAdapter(response?.data);
      setUser(userLogged);
    };
  }, []);

  const value = useMemo(
    () => ({
      handleProfileImage,
      handleRegister,
      handleLogin,
      profileImage,
      loadingEndpoint
    }),
    [profileImage, loadingEndpoint, handleProfileImage, handleRegister, handleLogin]
  );

  return (<AuthContext.Provider value={value}> {children} </AuthContext.Provider>);
};