/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSelector } from "@reduxjs/toolkit";

import { mockReducerName } from "./adapter";

export const mockStoreSelector = (state) => state[mockReducerName];

export const magicNumberSelector = createSelector(
  mockStoreSelector,
  (mockStore) => mockStore.magicNumber
);
