import classes from '../../index.module.scss';
import TabButton from '../tab-button';

const Tabs = () => {
  return (
    <div className={classes.tabs}>
      <TabButton title="самый дешевый" name={'cheapest'} />
      <TabButton title="самый быстрый" name={'fastest'} />
    </div>
  );
};

export default Tabs;
