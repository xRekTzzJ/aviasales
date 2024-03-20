import classes from '../../index.module.scss';

const TabButton = ({ id, title }) => {
  return (
    <button className={`${classes['tabs__button']} ${classes['tabs__button_active']}`} id={id}>
      {title}
    </button>
  );
};

export default TabButton;
