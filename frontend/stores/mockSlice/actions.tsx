import { createAction } from "@reduxjs/toolkit";

import { mockReducerName } from "./adapter";

const formatName = (name: string) => `${mockReducerName}/${name}`;

export const setMagicNumber = createAction<number>(
  formatName("setMagicNumber")
);
