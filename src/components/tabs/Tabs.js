import classes from '../../index.module.scss';
const Tabs = () => {
  return (
    <div className={classes.tabs}>
      <button className={`${classes['tabs__button']} ${classes['tabs__button_active']}`}>самый дешевый</button>
      <button className={classes['tabs__button']}>самый быстрый</button>
      <button className={classes['tabs__button']}>оптимальный</button>
    </div>
  );
};

export default Tabs;
