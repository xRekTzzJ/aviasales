const initialState = {
  tickets: [],
};

const aviasalesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TICKETS':
      return { ...state, tickets: action.payload.tickets };
    default:
      return state;
  }
};

export default aviasalesReducer;
