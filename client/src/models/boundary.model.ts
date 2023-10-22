import React from "react";
import type { ChildrenType } from "./";

/**
 * ErrorBoundary class properties for a React component.
 */
// Propiedades de la clase ErrorBoundary para un componente de React.
export interface ErrorBoundaryProps extends ChildrenType {
  fallBackComponent: React.ReactNode;
  resetCondition?: boolean;
  error?: boolean;
};

/**
 * Object with a boolean if an error occurred.
 */
// Objeto que devuelve si hay un error.
export interface IHasError {
  hasError: boolean;
};

/**
 * Properties of the ErrorBoundary class for the state of a component in React.
 */
// Propiedades de la clase ErrorBoundary para el estado de un componente en React.
export interface ErrorBoundaryState extends IHasError {
  resetCondition: any;
};
