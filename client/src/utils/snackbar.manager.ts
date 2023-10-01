import type { FC } from "react";
import { useSnackbar, type ProviderContext, type VariantType } from "notistack";

let useSnackbarRef: ProviderContext;
export const SnackbarConfig: FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const SnackbarManager = {
  toast(msg: string, variant: VariantType = "default") {
    useSnackbarRef.enqueueSnackbar(msg, { variant });
  },
  success(msg: string) {
    this.toast(msg, "success");
  },
  error(msg: string) {
    this.toast(msg, "error");
  },
  info(msg: string) {
    this.toast(msg, "info");
  },
  warning(msg: string) {
    this.toast(msg, "warning");
  },
};
