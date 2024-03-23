const initialState = {
  tickets: [],
  loading: true,
};

const aviasalesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TICKETS':
      return { ...state, tickets: action.payload.tickets, loading: false };
    case 'LOADING':
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default aviasalesReducer;
