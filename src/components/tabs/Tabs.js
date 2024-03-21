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

  const [active, setActive] = useState('null');

  store.subscribe(() => {
    setActive(store.getState());
  });
  return (
    <div className={classes.tabs}>
      <TabButton title="самый дешевый" nameAction={tabAction} name={'cheapest'} active={active} />
      <TabButton title="самый быстрый" nameAction={tabAction} name={'fastest'} active={active} />
      <TabButton title="оптимальный" nameAction={tabAction} name={'optimal'} active={active} />
    </div>
  );
};

export default Tabs;
