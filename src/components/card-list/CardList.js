import classes from '../../index.module.scss';
import Card from '../card';
const CardList = () => {
  return (
    <div className={classes['card-list']}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <button>показать еще 5 билетов!</button>
    </div>
  );
};

export default CardList;
