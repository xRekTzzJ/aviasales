const initialState = {
  tickets: [],
  loader: true,
  stop: false,
  error: false,
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
      return { ...state, loader: true };
    case 'ERROR':
      return { ...state, error: true, loader: false };
    default:
      return state;
  }
};

export default aviasalesReducer;
