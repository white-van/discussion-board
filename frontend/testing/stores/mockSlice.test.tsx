import { setMagicNumber } from "../../stores/mockSlice/actions";
import reducer, { initialState } from "../../stores/mockSlice/reducer";

describe("Reducers", () => {
  test("setMagicNumber", () => {
    const state = reducer(initialState, setMagicNumber(50));
    expect(state.magicNumber).toEqual(50);
  });
});
