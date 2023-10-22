/**
 * Generic model for typing objects.
 */
// Modelo génerico para tipar objetos.
export interface TypeWithKey<T> {
  [key: string]: T;
};
