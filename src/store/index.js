/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reduxLogger from 'redux-logger';

import { composeWithDevTools } from '@redux-devtools/extension';
import rootSaga from './modules/rootSaga';
import rootReducer from './modules/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ? composeWithDevTools(applyMiddleware(sagaMiddleware, reduxLogger))
    : applyMiddleware(sagaMiddleware, reduxLogger),
);
sagaMiddleware.run(rootSaga);

export default store;
