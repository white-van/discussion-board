/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { applyMiddleware, combineReducers,createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

const createRootReducer = () => combineReducers({});

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
