import { addMinutes, getHours, getMinutes } from 'date-fns';

import classes from '../../index.module.scss';

const CardInfoContainer = ({ segment }) => {
  const { origin, destination, duration, stops, date } = segment;
  const arrivalTime = [getHours(new Date(date)), getMinutes(new Date(date))];
  const departureTime = [
    getHours(addMinutes(new Date(date), duration)),
    getMinutes(addMinutes(new Date(date), duration)),
  ];
  const renderTime = (time) => {
    const timeArr = time.map((i) => {
      return i < 10 ? '0' + i : i;
    });
    return timeArr.join(':');
  };

  const fixedStops = () => {
    if (stops.length > 5) {
      return `${stops.length} пересадок`;
    }
    if (stops.length === 0) {
      return 'Без пересадок';
    }
    if (stops.length === 1) {
      return `${stops.length} пересадка`;
    }
    return `${stops.length} пересадки`;
  };

  return (
    <div className={classes['card__info-container']}>
      <div className={classes['card__data']}>
        <span className={classes['card__description']}>
          {origin} - {destination}
        </span>
        <span className={classes['card__info']}>{`${renderTime(arrivalTime)} - ${renderTime(departureTime)}`}</span>
      </div>
      <div className={classes['card__data']}>
        <span className={classes['card__description']}>в пути</span>
        <span className={classes['card__info']}>{`${Math.floor(duration / 60)}ч ${duration % 60}м`}</span>
      </div>
      <div className={classes['card__data']}>
        <span className={classes['card__description']}>{fixedStops()}</span>
        <span className={classes['card__info']}>{stops.join(', ')}</span>
      </div>
    </div>
  );
};

export default CardInfoContainer;
