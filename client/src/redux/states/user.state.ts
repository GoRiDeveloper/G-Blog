import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserLogged } from "@/models";
import { userEmptyState } from "@/constants";
import { getInLocalStorage } from "@/utils";

const session = getInLocalStorage("user");

export const userSlice = createSlice({
  name: "user",
  initialState: session ? session : userEmptyState,
  reducers: {
    createUser: (_state, action: PayloadAction<UserLogged>) => action.payload,
    modifyUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => userEmptyState,
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
