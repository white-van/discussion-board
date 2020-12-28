import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import { mockReducerName } from "./mockSlice/adapter";
import mockReducer from "./mockSlice/reducer";

const createRootReducer = () =>
  combineReducers({ [mockReducerName]: mockReducer });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
