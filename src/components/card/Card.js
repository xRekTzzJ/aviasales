import logo from '../../img/S7 Logo.png';
import classes from '../../index.module.scss';
const Card = () => {
  return (
    <div className={classes.card}>
      <span className={classes['card__price']}>13 400 Р</span>
      <img src={logo} alt="Logo airlines." className={classes['card__logo']} />
      <div className={classes['card__data-container']}>
        <div className={classes['card__info-container']}>
          <div className={classes['card__data']}>
            <span className={classes['card__description']}>MOW - HKT</span>
            <span className={classes['card__info']}>10:45 - 08:00</span>
          </div>
          <div className={classes['card__data']}>
            <span className={classes['card__description']}>в пути</span>
            <span className={classes['card__info']}>21ч 15м</span>
          </div>
          <div className={classes['card__data']}>
            <span className={classes['card__description']}>2 пересадки</span>
            <span className={classes['card__info']}>HKG, JNB</span>
          </div>
        </div>
        <div className={classes['card__info-container']}>
          <div className={classes['card__data']}>
            <span className={classes['card__description']}>MOW - HKT</span>
            <span className={classes['card__info']}>11:20 - 00:50</span>
          </div>
          <div className={classes['card__data']}>
            <span className={classes['card__description']}>в пути</span>
            <span className={classes['card__info']}>13ч 30м</span>
          </div>
          <div className={classes['card__data']}>
            <span className={classes['card__description']}>2 пересадки</span>
            <span className={classes['card__info']}>HKG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
