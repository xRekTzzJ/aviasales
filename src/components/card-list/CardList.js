import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from '../../index.module.scss';
import AviasalesService from '../../services/aviasales-service';
import Card from '../card';
const CardList = () => {
  const [totalTickets, setTotalTickets] = useState(5);
  const aviasalesApi = new AviasalesService();

  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  const activeTab = useSelector((state) => state.tabs.activeTabButton);

  useEffect(() => {
    const getData = async () => {
      await aviasalesApi.getTickets(await aviasalesApi.getSearchId());
      dispatch({ type: 'GET_CHEAPEST' });
    };
    getData();
  }, []);

  const filter = () => {
    switch (activeTab) {
      case 'cheapest':
        return [...tickets].sort((a, b) => {
          return a.price - b.price;
        });
      case 'fastest':
        return [...tickets].sort((a, b) => {
          return a.segments[0].duration - b.segments[0].duration;
        });
      default:
        return [...tickets];
    }
  };

  return (
    <div className={classes['card-list']}>
      {filter()
        .slice(0, totalTickets)
        .map((i, index) => {
          return <Card data={i} key={index} />;
        })}
      <button onClick={() => setTotalTickets(totalTickets + 5)}>показать еще 5 билетов!</button>
    </div>
  );
};

export default CardList;
