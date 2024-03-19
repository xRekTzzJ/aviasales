import { useState } from 'react';
import classes from '../../index.module.scss';
const Tabs = () => {
  const [activeCard, setActiveCard] = useState(1);
  const onTabClick = (e) => {
    switch (e.target.id) {
      case '1':
        setActiveCard(1);
        break;
      case '2':
        setActiveCard(2);
        break;
      case '3':
        setActiveCard(3);
        break;
    }
  };

  const TabButton = (props) => {
    const { id, title } = props;
    return (
      <button
        className={
          activeCard === id ? `${classes['tabs__button']} ${classes['tabs__button_active']}` : classes['tabs__button']
        }
        onClick={onTabClick}
        id={id}
      >
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
