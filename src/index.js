import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import React from 'react';

import TradeMachineContainer from './TradeMachineContainer';
import tradeMachineReducer from './TradeMachineReducer';
import './index.css';

// used to create async actions
const middlewares = [
  thunkMiddleware,
];

// this store will keep track of the global state of the app
const store = createStore(
  tradeMachineReducer,
  applyMiddleware(...middlewares)
);

render(
  // The provider component will provide all components access to the store
  <Provider store={store}>
      <TradeMachineContainer />
  </Provider>,
  document.getElementById('root')
);
