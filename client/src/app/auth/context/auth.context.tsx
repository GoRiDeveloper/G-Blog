"use client";

import {
  createContext,
  useState,
  useCallback,
  useMemo
} from "react";
import type { ChangeInputEvent } from "@/types";
import type{ ChildrenType, RegisterUser, UserLogin } from "@/models";
import { createUserAdapter } from "@/adapters";
import { useFetchAndLoad, useUserActions } from "@/hooks";
import { login, register } from "@/services/public.services";
import { AxiosInterceptor } from "@/interceptors";

AxiosInterceptor();

export const AuthContext =
  createContext({
    handleProfileImage: (_e: ChangeInputEvent) => {},
    handleRegister: (_data: RegisterUser) => {},
    handleLogin: (_data: UserLogin) => {},
    profileImage: "",
    loadingEndpoint: false
  });

export const AuthContextProvider = ({ children }: ChildrenType) => {
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
  const handleRegister = useCallback(async (data: RegisterUser) => {
      const user = await callEndpoint(register(data));
      if (user) {
        const newUser = createUserAdapter(user);
        setUser(newUser);
      };
  }, []);
  const handleLogin = useCallback(async (data: UserLogin) => {
    const session = await callEndpoint(login(data));
    if (session) {
      const user = createUserAdapter(session);
      setUser(user);
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