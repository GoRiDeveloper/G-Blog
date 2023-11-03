import type {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  Dispatch,
  SetStateAction,
} from "react";
import type { TypeWithKey } from "@/models";

/**
 * Type E-Mail. 
 */
// Tipado para un correo electrónico.
export type Email = `${string}@${string}.${string}`;

/**
 * Type for change event input.
 */
// Tipado para un evento de cambio en un input.
export type ChangeInputEvent = ChangeEvent<HTMLInputElement>;

/**
 * Type submit form event.
 */
// Tipado para un evento de envio de un formulario.
export type FormSubmitHandler = FormEventHandler<HTMLFormElement>;

/**
 * Type for generic form state.
 */
// Tipado para el estado de un formulario génerico.
export type GenericFormState = [TypeWithKey<any>, Dispatch<SetStateAction<{}>>];

/**
 * Type for change input event.
 */
// Tipado para un evento de cambio en un input.
export type ChangeInputEventHandler = ChangeEventHandler<HTMLInputElement>;

/**
 * Types of placeholder that an image can have.
 */
// Tipos de placeholder que una imagen puede tener.
export type ImagePlaceholder = "blur" | "empty" | `data:image/${string}`;

export type ImageLoading = "lazy" | "eager";
