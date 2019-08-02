import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const initState = {};

const middleware = [thunk];

const store = createStore(
  () => [],
  initState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
