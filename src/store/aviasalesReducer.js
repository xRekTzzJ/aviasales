const initialState = {
  searchId: null,
  tickets: [],
};

const aviasalesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SEARCH_ID':
      return { ...state, searchId: action.payload };
    case 'GET_TICKETS':
      return { ...state, tickets: action.payload.tickets };
    case 'GET_CHEAPEST':
      return {
        ...state,
        tickets: [...state.tickets].sort((a, b) => {
          return a.price - b.price;
        }),
      };
    case 'GET_FASTEST':
      return {
        ...state,
        tickets: [...state.tickets].sort((a, b) => {
          return a.segments[0].duration - b.segments[0].duration;
        }),
      };
    default:
      return state;
  }
};

export default aviasalesReducer;
