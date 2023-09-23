"use client";
import { useEffect } from "react";
import type { AxiosResponse } from "axios";

export const useAsync = (
  asyncFn: () => Promise<AxiosResponse<any, any>>,
  successFn: Function,
  returnFn: Function,
  dependencies: any[] = []
) => {
  useEffect(() => {
    let isActive = true;
    asyncFn().then((result) => {
      if (isActive) successFn(result.data);
    });
    return () => {
      returnFn && returnFn();
      isActive = false;
    };
  }, dependencies);
};
