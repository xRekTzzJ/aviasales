const initialState = {
  tickets: [],
  loader: true,
  stop: false,
};

const aviasalesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TICKETS':
      return {
        ...state,
        tickets: [
          ...state.tickets,
          ...action.payload.tickets.map((i) => {
            i.id = i.price + i.carrier;
            return i;
          }),
        ],
        loader: false,
        stop: action.payload.stop,
      };
    case 'LOADING':
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default aviasalesReducer;
