import { getSearchID, getTickets } from '../services/aviasales-service';
import { ALL, GET_TICKETS, LOADING } from '../types/types';

export const getData = () => {
  return async (dispatch) => {
    const searchId = await getSearchID();
    const interval = setInterval(async () => {
      try {
        const data = await getTickets(searchId);
        if (data.stop) clearInterval(interval);
        dispatch({
          type: GET_TICKETS,
          payload: data,
        });
      } catch (error) {
        if (error.message === 'Failed to fetch') {
          clearInterval(interval);
        }
      }
    }, 500);
  };
};

export const loading = { type: LOADING };

export const filterAll = { type: ALL };

export const setFilter = (e) => {
  return { type: e.target.htmlFor };
};

export const setTab = (name) => {
  return { type: name };
};
