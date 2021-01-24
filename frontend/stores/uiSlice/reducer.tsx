/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createReducer } from "@reduxjs/toolkit";

import { closeAllSnacks, closeSnack, displaySnack } from "./actions";
import { uiAdapter } from "./adapter";
import { Snack } from "./types";

export const initialState = uiAdapter.getInitialState({
  snacks: [],
});

const uiReducer = createReducer(initialState, (builder) => {
  builder.addCase(closeAllSnacks, (state) => {
    state.snacks = state.snacks.map((snack: Snack) => ({
      ...snack,
      dismissed: true,
    }));
  });
  builder.addCase(closeSnack, (state, action) => {
    state.snacks = state.snacks.map((snack: Snack) =>
      snack.key === action.payload ? { ...snack, dismissed: true } : snack
    );
  });
  builder.addCase(displaySnack, (state, action) => {
    state.snacks = [...state.snacks, { ...action.payload, dismissed: false }];
  });
});

export default uiReducer;
