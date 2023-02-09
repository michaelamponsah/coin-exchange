import thunk from 'redux-thunk';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import exchangesReducer from './exchange';

const store = configureStore(
  {
    reducer: {
      exchange: exchangesReducer,
    },
  },
  applyMiddleware((thunk)),
);

export default store;
