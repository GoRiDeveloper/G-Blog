import type {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  Dispatch,
  SetStateAction,
} from "react";
import type { TypeWithKey } from "@/models";

export type Email = `${string}@${string}.${string}`;
export type ChangeInputEvent = ChangeEvent<HTMLInputElement>;
export type FormSubmitHandler = FormEventHandler<HTMLFormElement>;
export type GenericFormState = [TypeWithKey<any>, Dispatch<SetStateAction<{}>>];
export type ChangeInputEventHandler = ChangeEventHandler<HTMLInputElement>;

export enum LocalStorageKeys {
  REFRESH_TOKEN = "refreshToken",
  TOKEN = "token",
}
