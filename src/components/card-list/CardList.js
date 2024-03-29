import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterAll, getData as getTickets, loading } from '../../actions/actions';
import classes from '../../index.module.scss';
import Card from '../card';
const CardList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loading);
    dispatch(filterAll);
    dispatch(getTickets());
  }, []);

  const [totalTickets, setTotalTickets] = useState(5);

  const tickets = useSelector((state) => state.tickets.tickets);
  const serverError = useSelector((state) => state.tickets.error);
  const activeTab = useSelector((state) => state.tabs.activeTabButton);
  const loader = useSelector((state) => state.tickets.loader);
  const stop = useSelector((state) => state.tickets.stop);
  const filterState = useSelector((state) => state.filter);

  const RenderList = () => {
    if (loader) {
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
    if (serverError) {
      return (
        <div className={classes['card-list']}>
          <span
            className={classes['card-list__not-found']}
            style={{
              color: 'red',
            }}
          >
            Сервис временно недоступен, пожалуйста, попробуйте позже.
          </span>
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
        {!stop ? (
          <div className={classes['card-list__loading']}>
            <span>
              <Spin
                indicator={
                  <LoadingOutlined
                    style={{
                      fontSize: 24,
                    }}
                    spin
                  />
                }
              />
              продолжается загрузка билетов.
            </span>
          </div>
        ) : null}
        {filter()
          .slice(0, totalTickets)
          .map((i) => {
            return <Card data={i} key={i.id} />;
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
      const ticketsArr = [...arr];
      switch (activeTab) {
        case 'cheapest':
          return ticketsArr.sort((a, b) => {
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
