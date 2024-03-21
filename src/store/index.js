import { combineReducers, configureStore } from '@reduxjs/toolkit';

import tabReducer from './tabReducer';
const reducer = combineReducers({
  tabs: tabReducer,
});

const store = configureStore({ reducer });

export default store;
