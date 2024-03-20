import classes from '../../index.module.scss';
import TabButton from '../tab-button';

const Tabs = () => {
  return (
    <div className={classes.tabs}>
      <TabButton title="самый дешевый" name={'cheapest'} />
      <TabButton title="самый быстрый" name={'fastest'} />
      <TabButton title="оптимальный" name={'optimal'} />
    </div>
  );
};

export default Tabs;
