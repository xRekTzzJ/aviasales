import { combineReducers, configureStore } from '@reduxjs/toolkit';

import filterReducer from './filterReducer';
import tabReducer from './tabReducer';
const reducer = combineReducers({
  tabs: tabReducer,
  filter: filterReducer,
});

const store = configureStore({ reducer });

export default store;
