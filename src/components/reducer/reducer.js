const initialState = {
  activeTabButton: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cheapest':
      return { ...initialState, activeTabButton: 'cheapest' };
    case 'fastest':
      return { ...initialState, activeTabButton: 'fastest' };
    default:
      return state;
  }
};

export default reducer;
