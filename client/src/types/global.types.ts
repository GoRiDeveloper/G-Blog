export interface ChildrenType {
  children: React.ReactNode;
}
export interface InputProps extends ChildrenType {
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export type Email = `${string}@${string}.${string}`;

export enum LocalStorageKeys {
  REFRESH_TOKEN = "refreshToken",
  TOKEN = "token",
}
