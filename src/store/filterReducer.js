const initialState = {
  All: false,
  Wo: false,
  One: false,
  Two: false,
  Three: false,
};

const allActive = {
  All: true,
  Wo: true,
  One: true,
  Two: true,
  Three: true,
};
const filterReducer = (state = initialState, action) => {
  let result = state;
  switch (action.type) {
    case 'All':
      result = state.All ? initialState : allActive;
      break;
    case 'Wo':
      result = { ...state, Wo: !state.Wo, All: false };
      break;
    case 'One':
      result = { ...state, One: !state.One, All: false };
      break;
    case 'Two':
      result = { ...state, Two: !state.Two, All: false };
      break;
    case 'Three':
      result = { ...state, Three: !state.Three, All: false };
      break;
  }
  if (result.Wo && result.One & result.Two & result.Three) {
    return allActive;
  }

  return result;
};

export default filterReducer;
