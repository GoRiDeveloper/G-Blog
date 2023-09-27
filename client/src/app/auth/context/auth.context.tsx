"use client";

import {
  createContext,
  useState,
  useCallback,
  useMemo,
  type ChangeEvent
} from "react";
import { useDispatch } from "react-redux";
import type { ChildrenType } from "@/types";
import type{ UserLogin } from "@/models";
import { createUserAdapter } from "@/adapters";
import { useFetchAndLoad } from "@/hooks/use.fetch.and.load";
import { createUser } from "@/redux/states/user.state";
import { login } from "@/services/public.services";

export const AuthContext =
  createContext({
    handleProfileImage: (_e: ChangeEvent<HTMLInputElement>) => {},
    handleRegister: (_data: UserLogin) => {},
    profileImage: "",
    loadingRegister: false
  });

export const AuthContextProvider = ({ children }: ChildrenType) => {
  const [profileImage, setProfileImage] = useState<string>(
    "/assets/img/default-user.webp"
  );
  const { loading: loadingRegister, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();

  const handleProfileImage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const fileBounded = e.target.files![0];
    const filePath = URL.createObjectURL(fileBounded);

    setProfileImage(filePath);
  }, []);
  const handleRegister = useCallback(async (data: UserLogin) => {
      const user = await callEndpoint(login(data));
      const newUser = createUserAdapter(user);
      dispatch(createUser(newUser));
  }, []);

  const value = useMemo(
    () => ({
      handleProfileImage,
      handleRegister,
      profileImage,
      loadingRegister
    }),
    [profileImage, loadingRegister, handleProfileImage, handleRegister]
  );

  return (<AuthContext.Provider value={value}> {children} </AuthContext.Provider>);
};