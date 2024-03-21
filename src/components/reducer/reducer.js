const reducer = (state = null, action) => {
  switch (action.type) {
    case 'optimal':
      return (state = 'optimal');
    case 'cheapest':
      return (state = 'cheapest');
    case 'fastest':
      return (state = 'fastest');
    default:
      return state;
  }
};

export default reducer;
