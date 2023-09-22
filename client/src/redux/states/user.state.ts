import { createSlice } from "@reduxjs/toolkit";
import type { UserLogged } from "@/models/user.models";
import type { Email } from "@/types";

export const UserEmptyState: UserLogged = {
  token: "",
  user: {
    name: "",
    email: "" as Email,
    description: "",
    profileImgUrl: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: UserEmptyState,
  reducers: {
    createUser: (_state, action) => action.payload,
    modifyUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => UserEmptyState,
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
