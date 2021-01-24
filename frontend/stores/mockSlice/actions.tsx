import { createAction } from "@reduxjs/toolkit";

import { formatName } from "../helpers";
import { mockReducerName } from "./adapter";

export const setMagicNumber = createAction<number>(
  formatName(mockReducerName, "setMagicNumber")
);
