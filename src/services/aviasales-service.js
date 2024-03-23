import { useDispatch } from 'react-redux';

export default class AviasalesService {
  dispatch = useDispatch();

  getSearchId = async () => {
    const res = await fetch('https://aviasales-test-api.kata.academy/search');
    const data = await res.json();
    return data.searchId;
  };

  getTickets = async (id) => {
    const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
    const data = await res.json();
    this.dispatch({ type: 'GET_TICKETS', payload: data });
    return data;
  };
}
