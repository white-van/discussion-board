import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { setMagicNumber } from "./actions";
import { mockAdapter } from "./adapter";

export const initialState = mockAdapter.getInitialState({
  magicNumber: 42,
});

const mockReducer = createReducer(initialState, (builder) => {
  builder.addCase(setMagicNumber, (state, action: PayloadAction<number>) => {
    state.magicNumber = action.payload;
  });
});

export default mockReducer;
