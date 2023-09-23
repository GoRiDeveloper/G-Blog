import type { TypeWithKey } from "@/models";

export const getValidationError = (err: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: "Error de conexión",
  };
  return codeMatcher[err];
};
