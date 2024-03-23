import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from '../../index.module.scss';
import Card from '../card';
const CardList = () => {
  const [totalTickets, setTotalTickets] = useState(5);

  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  const activeTab = useSelector((state) => state.tabs.activeTabButton);

  const getSearchId = async () => {
    const res = await fetch('https://aviasales-test-api.kata.academy/search');
    const data = await res.json();
    dispatch({ type: 'GET_SEARCH_ID', payload: data });
    return data.searchId;
  };
  const getTickets = async (id) => {
    const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
    const data = await res.json();
    dispatch({ type: 'GET_TICKETS', payload: data });
    return data;
  };
  useEffect(() => {
    const getData = async () => {
      await getTickets(await getSearchId());
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
