import { LoadingOutlined } from '@ant-design/icons';
import { Alert, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from '../../index.module.scss';
import { getSearchID, getTickets } from '../../services/aviasales-service';
import Card from '../card';
const CardList = () => {
  const [totalTickets, setTotalTickets] = useState(5);
  // const [errorState, setErrorState] = useState(false);
  const errorState = false;

  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  const activeTab = useSelector((state) => state.tabs.activeTabButton);
  const isLoading = useSelector((state) => state.tickets.loading);
  const filterState = useSelector((state) => state.filter);

  const getData = () => {
    return async (dispatch) => {
      const data = await getTickets(await getSearchID());
      dispatch({
        type: 'GET_TICKETS',
        payload: data,
      });
    };
  };

  useEffect(() => {
    dispatch({ type: 'LOADING' });
    dispatch({ type: 'All' });
    dispatch(getData());
  }, []);

  const RenderList = () => {
    if (errorState && tickets.length === 0) {
      return (
        <div className={classes['card-list']}>
          <Alert message="Server error" description="Please try again later." type="error" showIcon />
        </div>
      );
    }
    if (isLoading) {
      return (
        <div className={classes['card-list']}>
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 48,
                }}
                spin
              />
            }
          />
        </div>
      );
    }
    if (!filter().length) {
      return (
        <div className={classes['card-list']}>
          <span className={classes['card-list__not-found']}>Рейсов, подходящих под заданные фильтры, не найдено</span>
        </div>
      );
    }
    return (
      <div className={classes['card-list']}>
        {filter()
          .slice(0, totalTickets)
          .map((i, index) => {
            return <Card data={i} key={index} />;
          })}
        <button
          onClick={ticketsAreOut ? () => {} : () => setTotalTickets(totalTickets + 5)}
          className={
            ticketsAreOut
              ? `${classes['card-list__button']} ${classes['card-list__button_disabled']}`
              : classes['card-list__button']
          }
        >
          {ticketsAreOut ? 'билетов больше нет!' : 'показать еще 5 билетов!'}
        </button>
      </div>
    );
  };

  const filter = () => {
    const tabFilter = (arr = tickets) => {
      switch (activeTab) {
        case 'cheapest':
          return [...arr].sort((a, b) => {
            return a.price - b.price;
          });
        case 'fastest':
          return [...arr].sort((a, b) => {
            return a.segments[0].duration - b.segments[0].duration;
          });
        default:
          return [...arr];
      }
    };
    const checkboxFilter = () => {
      const all = filterState.All ? tabFilter() : [];
      const woTransfers =
        filterState.Wo && !filterState.All
          ? tabFilter().filter((i) => {
              return i.segments[0].stops.length === 0 && i.segments[1].stops.length === 0;
            })
          : [];
      const oneTransfer =
        filterState.One && !filterState.All
          ? tabFilter().filter((i) => {
              return i.segments[0].stops.length === 1 && i.segments[1].stops.length === 1;
            })
          : [];
      const twoTransfers =
        filterState.Two && !filterState.All
          ? tabFilter().filter((i) => {
              return i.segments[0].stops.length === 2 && i.segments[1].stops.length === 2;
            })
          : [];
      const threeTransfers =
        filterState.Three && !filterState.All
          ? tabFilter().filter((i) => {
              return i.segments[0].stops.length === 3 && i.segments[1].stops.length === 3;
            })
          : [];
      const filteredTickets = [...all, ...woTransfers, ...oneTransfer, ...twoTransfers, ...threeTransfers];
      return tabFilter(filteredTickets);
    };
    return checkboxFilter();
  };

  const ticketsAreOut = filter().length <= totalTickets;

  return <RenderList />;
};

export default CardList;
