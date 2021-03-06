import * as actionType from '../CONSTANTS';

const intialState = {
  products: [],
  isLoading: false,
  isError: false,
  errorMessage: ''
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.FETCH_PRODUCTS_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case actionType.FETCH_PRODUCTS_SUCCEDED:
      console.log(action);
      return {
        ...state,
        products: action.products,
        isLoading: false
      };
    case actionType.FETCH_PRODUCTS_FAILED:
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
