import React from 'react';
import logo from '../../img/Logo.png';

const App = () => {
  return (
    <>
      <img src={logo} alt="Logo." className="logo" />
      <div className="filter">
        <span className="filter__title">количество пересадок</span>
        <ul className="filter__list">
          <li className="filter__item">
            <span className="filter__span">Все</span>
          </li>
          <li className="filter__item">
            <span className="filter__span">Без пересадок</span>
          </li>
          <li className="filter__item">
            <span className="filter__span">1 пересадка</span>
          </li>
          <li className="filter__item">
            <span className="filter__span">2 пересадки</span>
          </li>
          <li className="filter__item">
            <span className="filter__span">3 пересадки</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default App;
