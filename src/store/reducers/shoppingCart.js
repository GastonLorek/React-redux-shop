import * as actionType from '../actions/actionTypes';

const intialState = {
  shoppingCart: [],
  isOpen: false
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.TOOGLE_CART:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      return state;
  }
};

export default reducer;
