import React from 'react';
import { Provider } from 'react-redux';

import logo from '../../img/Logo.png';
import classes from '../../index.module.scss';
import CardList from '../card-list';
import Filter from '../filter';
import Tabs from '../tabs';

const App = () => {
  return (
    <Provider>
      <>
        <img src={logo} alt="Logo." className={classes.logo} />
        <div className={classes['grid-container']}>
          <Filter />
          <Tabs />
          <CardList />
        </div>
      </>
    </Provider>
  );
};
export default App;
