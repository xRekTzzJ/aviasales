import { bindActionCreators, configureStore } from '@reduxjs/toolkit';
import { useState } from 'react';

import classes from '../../index.module.scss';
import * as actions from '../actions/actions';
import reducer from '../reducer/reducer';
import TabButton from '../tab-button';

const Tabs = () => {
  const store = configureStore({ reducer });
  const { dispatch } = store;
  const { tabAction } = bindActionCreators(actions, dispatch);

  const [activeButton, setActiveButton] = useState('null');

  store.subscribe(() => {
    setActiveButton(store.getState());
  });
  return (
    <div className={classes.tabs}>
      <TabButton title="самый дешевый" tabAction={tabAction} name={'cheapest'} activeButton={activeButton} />
      <TabButton title="самый быстрый" tabAction={tabAction} name={'fastest'} activeButton={activeButton} />
      <TabButton title="оптимальный" tabAction={tabAction} name={'optimal'} activeButton={activeButton} />
    </div>
  );
};

export default Tabs;
