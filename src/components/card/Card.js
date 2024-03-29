import classes from '../../index.module.scss';
import CardInfoContainer from '../card-info-container';
const Card = (props) => {
  const { price, carrier, segments } = props.data;
  return (
    <div className={classes.card}>
      <span className={classes['card__price']}>{new Intl.NumberFormat('ru-RU').format(price)} Р</span>
      <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="Logo airlines." className={classes['card__logo']} />
      <div className={classes['card__data-container']}>
        {segments.map((i, index) => {
          return <CardInfoContainer key={index} segment={i} />;
        })}
      </div>
    </div>
  );
};

export default Card;
