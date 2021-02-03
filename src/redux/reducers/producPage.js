import * as actionType from '../CONSTANTS';

const intialState = {
  product: {},
  isLoading: false,
  isError: false,
  errorMessage: ''
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.FETCH_PRODUCT_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case actionType.FETCH_PRODUCT_SUCCEDED:
      console.log(action);
      return {
        ...state,
        isLoading: false,
        product: action.product
      };
    case actionType.FETCH_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.err
      };
    default:
      return state;
  }
};

export default reducer;
