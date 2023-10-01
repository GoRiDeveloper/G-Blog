import { useAppDispatch } from "./";
import { createUser, modifyUser, resetUser } from "@/redux/states/user.state";

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const setUser = (newUser: any) => dispatch(createUser(newUser));
  return { setUser };
};
