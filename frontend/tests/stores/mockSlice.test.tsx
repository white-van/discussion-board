import { setMagicNumber } from "../../stores/mockSlice/actions";
import { mockReducerName } from "../../stores/mockSlice/adapter";
import reducer, { initialState } from "../../stores/mockSlice/reducer";
import { magicNumberSelector } from "../../stores/mockSlice/selectors";

describe("Reducers", () => {
  test("setMagicNumber", () => {
    const state = reducer(initialState, setMagicNumber(50));
    expect(state.magicNumber).toEqual(50);
  });
});

const mockSelectorState = {
  [mockReducerName]: {
    ...initialState,
  },
};

describe("Selectors", () => {
  test("magicNumberSelector", () => {
    expect(magicNumberSelector(mockSelectorState)).toEqual(
      initialState.magicNumber
    );
  });
});
