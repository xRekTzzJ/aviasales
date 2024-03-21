import { useDispatch, useSelector } from 'react-redux';

import classes from '../../index.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const onFilterClick = (e) => {
    dispatch({ type: e.target.htmlFor });
  };
  return (
    <div className={classes.filter}>
      <span className={classes['filter__title']}>количество пересадок</span>
      <ul className={classes['filter__list']}>
        <li className={classes['filter__item']}>
          <input type="checkbox" checked={filter.All} className={classes['filter__checkbox']} id="All" />
          <label htmlFor="All" onClick={onFilterClick}>
            Все
          </label>
        </li>
        <li className={classes['filter__item']}>
          <input type="checkbox" checked={filter.Wo} className={classes['filter__checkbox']} id="Wo" />
          <label htmlFor="Wo" onClick={onFilterClick}>
            Без пересадок
          </label>
        </li>
        <li className={classes['filter__item']}>
          <input type="checkbox" checked={filter.One} className={classes['filter__checkbox']} id="One" />
          <label htmlFor="One" onClick={onFilterClick}>
            1 пересадка
          </label>
        </li>
        <li className={classes['filter__item']}>
          <input type="checkbox" checked={filter.Two} className={classes['filter__checkbox']} id="Two" />
          <label htmlFor="Two" onClick={onFilterClick}>
            2 пересадки
          </label>
        </li>
        <li className={classes['filter__item']}>
          <input type="checkbox" checked={filter.Three} className={classes['filter__checkbox']} id="Three" />
          <label htmlFor="Three" onClick={onFilterClick}>
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
