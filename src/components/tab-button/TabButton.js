import { bindActionCreators, configureStore } from '@reduxjs/toolkit';
import { useState } from 'react';

import classes from '../../index.module.scss';
import * as actions from '../actions/actions';
import reducer from '../reducer/reducer';

const TabButton = ({ id, title, name }) => {
  const store = configureStore({ reducer });
  const { dispatch } = store;
  const { nameAction } = bindActionCreators(actions, dispatch);

  const [styles, setStyles] = useState(`${classes['tabs__button']}`);
  const update = () => {
    setStyles(
      store.getState() === name
        ? `${classes['tabs__button']} ${classes['tabs__button_active']}`
        : `${classes['tabs__button']}`
    );
  };
  store.subscribe(update);
  return (
    <button className={styles} id={id} onClick={() => nameAction(name)}>
      {title}
    </button>
  );
};

export default TabButton;
