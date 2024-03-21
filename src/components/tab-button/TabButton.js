import classes from '../../index.module.scss';

const TabButton = ({ title, name, nameAction, active }) => {
  const onButtonClick = () => {
    nameAction(name);
  };

  return (
    <button
      className={
        active === name ? `${classes['tabs__button']} ${classes['tabs__button_active']}` : `${classes['tabs__button']}`
      }
      onClick={onButtonClick}
    >
      {title}
    </button>
  );
};

export default TabButton;
