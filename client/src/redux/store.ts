import { configureStore } from "@reduxjs/toolkit";
import { user } from "./states/";

export interface AppStore {
  user: any;
}

export const store = configureStore<AppStore>({
  reducer: {
    user,
  },
});
