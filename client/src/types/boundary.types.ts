import React from "react";
import type { ChildrenType } from "./";

export interface Props extends ChildrenType {
  fallBackComponent: React.ReactNode;
  resetCondition?: boolean;
  error?: boolean;
}

export interface State {
  hasError: boolean;
  resetCondition: any;
}
