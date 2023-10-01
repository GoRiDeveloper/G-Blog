import type { FC } from "react";
import type { ChangeInputEventHandler, FormSubmitHandler } from "@/types";

export interface GenericForm extends ChildrenType {
  title: string;
  fields: {
    type: string;
    name: string;
    placeholder?: string;
    required: boolean;
    icon?: FC<{ className: string }>;
  }[];
  loading?: boolean;
  onSubmit: FormSubmitHandler;
}
export interface ChildrenType {
  children: React.ReactNode;
}
export interface InputProps extends ChildrenType {
  type?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  value?: string;
  handleInputChange?: ChangeInputEventHandler;
}
export interface GenericImageChange {
  imageState?: string;
  alt?: string;
}
export interface GenericInputFile {
  name?: string;
  multiple?: boolean;
  accept?: string;
  handleFile?: ChangeInputEventHandler;
}
