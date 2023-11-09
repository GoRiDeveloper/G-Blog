import type { FC, CSSProperties } from 'react';
import type { AxiosResponse } from 'axios';
import type { AxiosCall } from '.';
import type {
    ChangeInputEventHandler,
    FormSubmitHandler,
    ImagePlaceholder
} from '@/types';

/**
 * Model of a generic form.
 */
// Modelo de un formulario génerico.
export interface GenericForm extends ChildrenType {
    title: string;
    fields: Field[];
    loading?: boolean;
    encType?: string;
    onSubmit: FormSubmitHandler;
};

/**
 * Generic input model in a form.
 */
// Modelo de input génerico en un formulario.
export interface Field {
    type: string;
    name: string;
    placeholder?: string;
    required: boolean;
    icon?: FC<{ className: string }>;
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
    width?: number;
    height?: number;
    style?: CSSProperties;
    priority?: boolean;
    placeholder?: ImagePlaceholder;
    blurDataUrl?: string;
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

/**
 * Generic model of the set of a route for a Link.
 */
// Modelo génerico del conjunto de una ruta para un Link.
export interface Route {
    id: string;
    path: string;
    name: string;
};

/**
 * Generic model of the set of classes for the components of a route for a Link.
 */
// Modelo génerico del conjunto de clases para los componentes de una ruta para un Link.
export interface NavClassName {
    linkClass: string;
    anchorTagClass: string;
};

/**
 * Generic model for a route navigator.
 */
// Modelo génerico para un navegador de rutas.
export interface NavigatorProps {
    pathNames: Route[];
    classNames: NavClassName;
};

/**
 * Generic model for the route navigator list component.
 */
// Modelo génerico para el componente de la lista del navegador de rutas.
export interface NavbarListProps {
    activeNavbar: boolean;
};

/**
 * Generic model for the button component to handle the state of the main navigation menu.
 */
// Modelo génerico para el componente del botón para manejar el estado del menu de navegación principal.
export interface NavMenuButtonProps extends NavbarListProps {
    handleActiveNavbar: Function;
};

/**
 * Generic model for the user profile component.
 */
// Modelo génerico para el componente de pefil de usuario.
export interface UserProps {
    token: string;
};
