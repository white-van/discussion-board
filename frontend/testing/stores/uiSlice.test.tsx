/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  closeAllSnacks,
  closeSnack,
  displaySnack,
} from "../../stores/uiSlice/actions";
import { uiReducerName } from "../../stores/uiSlice/adapter";
import reducer, { initialState } from "../../stores/uiSlice/reducer";
import { snacksSelector } from "../../stores/uiSlice/selectors";

const mockFullState = {
  [uiReducerName]: {
    ...initialState,
  },
};

const mockState = mockFullState[uiReducerName];

const mockSnack = {
  key: 1,
  message: "hi",
  options: { variant: "success" },
  dismissed: false,
};

describe("uiStore reducer", () => {
  it("displaySnack", () => {
    const state = reducer(undefined, displaySnack(mockSnack));
    expect(state.snacks).toContainEqual(mockSnack);
  });

  it("closeSnack", () => {
    const mockSnack = {
      key: 1,
      message: "hi",
      options: { variant: "success" },
      dismissed: false,
    };

    const state = reducer(undefined, displaySnack(mockSnack));
    expect(state.snacks).toContainEqual(mockSnack);

    const closeSnackState = reducer(state, closeSnack(mockSnack.key));
    expect(closeSnackState.snacks[0].dismissed).toEqual(true);
  });

  it("closeAllSnacks", () => {
    const mockSnack = {
      key: 1,
      message: "hi",
      options: { variant: "success" },
      dismissed: false,
    };

    const secondMockSnack = {
      ...mockSnack,
      key: 2,
    };

    const firstState = reducer(undefined, displaySnack(mockSnack));
    const secondState = reducer(firstState, displaySnack(secondMockSnack));
    const closedState = reducer(secondState, closeAllSnacks());
    closedState.snacks.forEach((snack) =>
      expect(snack.dismissed).toEqual(true)
    );
  });
});

describe("uiStore selectors", () => {
  it("Returns snacks", () => {
    expect(snacksSelector(mockFullState)).toEqual(mockState.snacks);
  });
});
