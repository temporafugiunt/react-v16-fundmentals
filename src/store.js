import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(
  reducer,
  compose(
    // Install thunk extension for redux.
    applyMiddleware(thunk),
    // Start redux dev tools if available.
    typeof window === "object" && typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : (f) => f
  )
);

export default store;
