import { Action, createAction } from "@reduxjs/toolkit";

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

export interface SnackAction extends Action<string> {
  payload: Snack;
}

export const displaySuccessSnack = (message: string): SnackAction => {
  return displaySnack({
    key: Math.random(),
    message,
    options: { variant: "success" },
    dismissed: false,
  });
};

export const displayErrorSnack = (message: string): SnackAction => {
  return displaySnack({
    key: Math.random(),
    message,
    options: { variant: "error" },
    dismissed: false,
  });
};

export const displayWarningSnack = (message: string): SnackAction => {
  return displaySnack({
    key: Math.random(),
    message,
    options: { variant: "warning" },
    dismissed: false,
  });
};

export const displayInfoSnack = (message: string): SnackAction => {
  return displaySnack({
    key: Math.random(),
    message,
    options: { variant: "info" },
    dismissed: false,
  });
};

export interface SnackActions {
  displaySuccessSnack: typeof displaySuccessSnack;
  displayErrorSnack: typeof displayErrorSnack;
  displayWarningSnack: typeof displayWarningSnack;
  displayInfoSnack: typeof displayInfoSnack;
}
