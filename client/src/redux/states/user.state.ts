import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserLogged } from "@/models";
import type { Email } from "@/types";
import {
  saveInLocalStorage,
  getInLocalStorage,
  removeInLocalStorage,
} from "@/utils";

const userEmptyState = {
  token: "",
  user: {
    name: "",
    email: "" as Email,
    description: "",
    profileImgUrl: "",
  },
};
const session = getInLocalStorage("user");
const UserInitState: UserLogged = session ? session : userEmptyState;

export const userSlice = createSlice({
  name: "user",
  initialState: UserInitState,
  reducers: {
    createUser: (state, action: PayloadAction<UserLogged>) => {
      saveInLocalStorage("user", JSON.stringify(state));
      return action.payload;
    },
    modifyUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => {
      removeInLocalStorage("user");
      return userEmptyState;
    },
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
