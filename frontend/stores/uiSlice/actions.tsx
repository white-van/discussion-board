/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createAction } from "@reduxjs/toolkit";

import { formatName } from "../helpers";
import { uiReducerName } from "./adapter";
import { Snack } from "./types";

export const closeAllSnacks = createAction(
  formatName(uiReducerName, "closeAllSnacks")
);

export const closeSnack = createAction<number>(
  formatName(uiReducerName, "closeSnack")
);

export const displaySnack = createAction<Snack>(
  formatName(uiReducerName, "displaySnack")
);

export const displaySuccessSnack = (message: string) => {
  return displaySnack({
    key: Math.random(),
    message,
    options: { variant: "success" },
    dismissed: false,
  });
};

export const displayErrorSnack = (message: string) => {
  return displaySnack({
    key: Math.random(),
    message,
    options: { variant: "error" },
    dismissed: false,
  });
};

export const displayWarningSnack = (message: string) => {
  return displaySnack({
    key: Math.random(),
    message,
    options: { variant: "warning" },
    dismissed: false,
  });
};

export const displayInfoSnack = (message: string) => {
  return displaySnack({
    key: Math.random(),
    message,
    options: { variant: "info" },
    dismissed: false,
  });
};
