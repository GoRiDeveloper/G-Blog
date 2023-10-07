import { configureStore } from "@reduxjs/toolkit";
import type { InitAppStore } from "@/types/redux.store.types";
import { user } from "@/redux/states/";
import { saveDataInLocalStorage } from "@/redux/middlewares";

export const makeStore = configureStore<InitAppStore>({
  reducer: {
    user,
  },
  middleware: [saveDataInLocalStorage],
});
