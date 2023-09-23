import { configureStore } from "@reduxjs/toolkit";
import type { InitAppStore } from "@/types/redux.store.types";
import { user } from "@/redux/states/";

export const makeStore = configureStore<InitAppStore>({
  reducer: {
    user,
  },
});
