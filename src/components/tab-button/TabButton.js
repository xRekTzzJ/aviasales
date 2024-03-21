import classes from '../../index.module.scss';

const TabButton = ({ title, name, tabAction, activeButton }) => {
  const onButtonClick = () => {
    tabAction(name);
  };

  return (
    <button
      className={
        activeButton === name
          ? `${classes['tabs__button']} ${classes['tabs__button_active']}`
          : `${classes['tabs__button']}`
      }
      onClick={onButtonClick}
    >
      {title}
    </button>
  );
};

export default TabButton;
