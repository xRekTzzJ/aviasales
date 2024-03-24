import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import aviasalesReducer from './aviasalesReducer';
import filterReducer from './filterReducer';
import tabReducer from './tabReducer';
const reducer = combineReducers({
  tabs: tabReducer,
  filter: filterReducer,
  tickets: aviasalesReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
