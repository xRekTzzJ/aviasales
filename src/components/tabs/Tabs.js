import classes from '../../index.module.scss';
import TabButton from '../tab-button';

const Tabs = () => {
  const reducer = (state = null, action) => {
    switch (action.type) {
      case 'optimal':
        return (state = 'optimal');
      case 'cheapest':
        return (state = 'cheapest');
      case 'fastest':
        return (state = 'fastest');
      default:
        return state;
    }
  };

  let state = reducer(undefined, {});

  state = reducer(state, { type: 'cheapest' });
  console.log(state);

  return (
    <div className={classes.tabs}>
      <TabButton title="самый дешевый" name={'cheapest'} />
      <TabButton title="самый быстрый" name={'fastest'} />
      <TabButton title="оптимальный" name={'optimal'} />
    </div>
  );
};

export default Tabs;
