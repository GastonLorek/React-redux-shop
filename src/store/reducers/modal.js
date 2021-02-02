import * as actionType from '../actions/actionTypes';

const intialState = {
  isOpen: false,
  redirect: false,
  payment: null
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.TOOGLE_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
        redirect: true,
        payment: action.paylaod
      };
    default:
      return state;
  }
};
export default reducer;
