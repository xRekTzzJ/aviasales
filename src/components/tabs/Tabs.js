import classes from '../../index.module.scss';
const Tabs = () => {
  const TabButton = (props) => {
    const { id, title } = props;
    return (
      <button className={`${classes['tabs__button']} ${classes['tabs__button_active']}`} id={id}>
        {title}
      </button>
    );
  };

  return (
    <div className={classes.tabs}>
      <TabButton title="самый дешевый" id={1} />
      <TabButton title="самый быстрый" id={2} />
      <TabButton title="оптимальный" id={3} />
    </div>
  );
};

export default Tabs;
