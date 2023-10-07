import type { Middleware } from "@reduxjs/toolkit";
import { saveInLocalStorage, removeInLocalStorage } from "@/utils";

export const saveDataInLocalStorage: Middleware =
  (store) => (next) => (action) => {
    const actionType = action.type.split("/");
    next(action);
    if (actionType[1] === "createUser")
      saveInLocalStorage(actionType[0], JSON.stringify(store.getState()));
    if (actionType[1] === "resetUser") removeInLocalStorage(actionType[0]);
  };
