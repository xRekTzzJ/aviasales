import classes from '../../index.module.scss';

const TabButton = ({ id, title, name, nameAction, active }) => {
  let styles =
    active === name ? `${classes['tabs__button']} ${classes['tabs__button_active']}` : `${classes['tabs__button']}`;
  return (
    <button
      className={styles}
      id={id}
      onClick={() => {
        nameAction(name);
      }}
    >
      {title}
    </button>
  );
};

export default TabButton;
