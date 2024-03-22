import { combineReducers, configureStore } from '@reduxjs/toolkit';

import aviasalesReducer from './aviasalesReducer';
import filterReducer from './filterReducer';
import tabReducer from './tabReducer';
const reducer = combineReducers({
  tabs: tabReducer,
  filter: filterReducer,
  tickets: aviasalesReducer,
});

const store = configureStore({ reducer });

export default store;
