import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import searchReducer from "./search/reducers";
import { watchSearch } from "./search/sagas";

const composeEnhancers =
(JSON.stringify(process.env.NODE_ENV) === JSON.stringify('development')
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const rootReducer = combineReducers({
  search: searchReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchSearch);

export default store;