"use client";

export const saveInLocalStorage = (key: string, value: string): void =>
  localStorage.setItem(key, value);

export const getInLocalStorage = (key: string): any => {
  if (typeof window !== "undefined" && window.localStorage) {
    const result = localStorage.getItem(key);
    return !!result && JSON.parse(result);
  }
};

export const removeInLocalStorage = (key: string): void =>
  localStorage.removeItem(key);

export const clearLocalStorage = (): void => localStorage.clear();
