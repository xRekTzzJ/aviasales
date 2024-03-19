import classes from '../../index.module.scss';
const Filter = () => {
  return (
    <div className={classes.filter}>
      <span className={classes['filter__title']}>количество пересадок</span>
      <ul className={classes['filter__list']}>
        <li className={classes['filter__item']}>
          <input type="checkbox" className={classes['filter__checkbox']} id="All" />
          <label htmlFor="All">Все</label>
        </li>
        <li className={classes['filter__item']}>
          <input type="checkbox" className={classes['filter__checkbox']} id="w/o-transfers" />
          <label htmlFor="w/o-transfers">Без пересадок</label>
        </li>
        <li className={classes['filter__item']}>
          <input type="checkbox" className={classes['filter__checkbox']} id="one-transfers" />
          <label htmlFor="one-transfers">1 пересадка</label>
        </li>
        <li className={classes['filter__item']}>
          <input type="checkbox" className={classes['filter__checkbox']} id="two-transfers" />
          <label htmlFor="two-transfers">2 пересадки</label>
        </li>
        <li className={classes['filter__item']}>
          <input type="checkbox" className={classes['filter__checkbox']} id="three-transfers" />
          <label htmlFor="three-transfers">3 пересадки</label>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
