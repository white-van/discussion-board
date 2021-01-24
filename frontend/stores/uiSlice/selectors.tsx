/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSelector } from "reselect";

import { uiReducerName } from "./adapter";

const uiStoreSelector = (state) => state[uiReducerName];

export const snacksSelector = createSelector(
  uiStoreSelector,
  (uiStore) => uiStore.snacks
);
