"use client";

import type { FC } from "react";
import {
  useSnackbar,
  type ProviderContext,
  type VariantType
} from "notistack";

/**
 * Reference to create the context for application notifications.
 */
// Referencia para crear el contexto a las notificaciones de la aplicación.
let useSnackbarRef: ProviderContext;
export const SnackbarConfig: FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

/**
 * Methods to display the different types of notification messages.
 */
// Metodos para mostrar los distintos tipos de mensajes de notificación.
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
