"use client";

import { Component, ErrorInfo, type ReactNode } from "react";
import type { ErrorBoundaryProps, ErrorBoundaryState, IHasError } from "@/models";

/**
 * Class to handle rendering errors in the application.
 */
// Clase para manejar los errores de renderizado en la aplicación.
export class ErrorBoundary extends Component<ErrorBoundaryProps> {

    /**
     * State to handle errors in a component.
     */
    // Estado para controlar los errores de un componente.
    readonly state: ErrorBoundaryState;

    constructor(props: ErrorBoundaryProps) {

        // Configuramos las propiedades de nuestra herencia.
        super(props);

        // Asignamos el estado de errores en la clase.
        this.state = { hasError: false, resetCondition: props.resetCondition };

    };

    /**
     * Method to obtain state derived from error.
     * 
     * @param { Error } error - Error
     * 
     * @returns { IHasError } Object with a boolean if an error occurred.
     */
    // Método para obtener si ocurrio un error en el estado del componente.
    static getDerivedStateFromError(error: Error): IHasError {
        console.error(error);
        return { hasError: true };
    };

    /**
     * Method to check if component conditions have changed to update the error status of the component.
     * 
     * @param { ErrorBoundaryProps } props 
     * @param { ErrorBoundaryState } state 
     * 
     * @returns Updated component error status.
     */
    // Método para verificar si las condiciones del componente han cambiado para
    // actualizar el estado de errores del componente.
    static getDerivedStateFromProps(
        props: ErrorBoundaryProps,
        state: ErrorBoundaryState
    ): null | ErrorBoundaryState {

        // Verificamos si el estado del componente es distinto a las propiedades actualizadas del componente.
        if (props.resetCondition !== state.resetCondition)
        // Devolvemos el estado actualizado libre de errores.
            return { hasError: false, resetCondition: props.resetCondition };

        // Devolvemos un valor falsy en dado caso que siga ocurriendo un error.
        return null;
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo): IHasError {
        return { hasError: true };
    };

    /**
     * Function to check the rendering of the component.
     * 
     * @returns { ReactNode } Rendered component.
     */
    // Función para verificar el renderizado del componente.
    render(): ReactNode {

        // Verificamos si existe un error en el componente.
        if (this.state.hasError || this.props.error)
            // Retornamos un componente de error.
            return this.props.fallBackComponent;

        // Devolvemos el componente sin errores.
        return this.props.children;
        
    };
};