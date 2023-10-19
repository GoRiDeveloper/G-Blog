"use client";

import { useState, useEffect } from "react";
import type { AxiosResponse } from "axios";
import type { AxiosCall } from "../models";

export const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  let controller: AbortController;

  const callEndpoint = async (axiosCall: AxiosCall<any>) => {
    if (axiosCall.controller) controller = axiosCall.controller;

    setLoading(true);

    let result = {} as AxiosResponse<any>;

    try {
      result = await axiosCall.call;
    } catch (err: any) {
      setLoading(false);
      throw err;
    }

    setLoading(false);
    return result;
  };
  const cancelEnpoint = (): void => {
    setLoading(false);
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelEnpoint();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, callEndpoint };
};
