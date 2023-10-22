"use client";

import { useEffect } from "react";
import type { AxiosResponse } from "axios";

/**
 * A 
 * 
 * @param { (): Promise<AxiosResponse<any, any>> } asyncFn -
 * @param {} successFn - 
 * @param {} returnFn -
 * @param {} dependencies -
 */
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
