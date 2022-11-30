import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reducer from "./reducers";
import rootSaga from './saga';

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (initialState) => createStore(reducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleWare)));

const store = configureStore({});

sagaMiddleWare.run(rootSaga);

export default store;