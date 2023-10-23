import type { FC } from "react";
import type { AxiosResponse } from "axios";
import type { AxiosCall } from ".";
import type { ChangeInputEventHandler, FormSubmitHandler } from "@/types";

/**
 * Model of a generic form.
 */
// Modelo de un formulario génerico.
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
  encType?: string;
  onSubmit: FormSubmitHandler;
};

/**
 * Default model of the properties of a component in React.
 */
// Modelo por defecto de las propiedades de un componente en React.
export interface ChildrenType {
  children: React.ReactNode;
};

/**
 * Model of the properties of a generic input.
 */
// Modelo de las propiedades de un input génerico.
export interface InputProps extends ChildrenType {
  type?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  value?: string;
  handleInputChange?: ChangeInputEventHandler;
};

/**
 * Custom Hook model to make controlled requests.
 */
// Modelo del Custom Hook para hacer peticiones controladas.
export interface IFetchAndLoad {
  loading: boolean;
  callEndpoint: (axiosCall: AxiosCall<any>) => Promise<AxiosResponse<any>>;
};

/**
 * Generic model of the dynamic image component.
 */
// Modelo génerico del componente de imagen dinamica.
export interface GenericImageChange {
  imageState: string;
  alt: string;
};

/**
 * Model of the properties of a generic input of type file.
 */
// Modelo de las propiedades de un input génerico de tipo file.
export interface GenericInputFile {
  name?: string;
  multiple?: boolean;
  accept?: string;
  handleFile?: ChangeInputEventHandler;
};
