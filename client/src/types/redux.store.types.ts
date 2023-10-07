import type { ThunkAction, Action } from "@reduxjs/toolkit";
import type { makeStore } from "@/redux/store";
import { userEmptyState } from "@/constants";

export interface InitAppStore {
  user: typeof userEmptyState;
}
export type AppState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
