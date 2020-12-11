import * as actionType from '../actions/actionTypes';

const intialState = {
  shoppingCart: [],
  isOpen: false,
  counter: 0,
  quantity: 1,
  total: 0
};

const findItem = (cart, product) => cart.find(item => item.id === product.id);
export const getCartTotalAmount = shoppingCart =>
  shoppingCart?.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.TOOGLE_CART:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case actionType.ADD_TO_CART:
      if (findItem(state.shoppingCart, action.item)) {
        return {
          ...state
        };
      }
      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart,
          {
            ...action.item,
            quantity: state.quantity
          }
        ],
        isOpen: !state.isOpen
      };
    case actionType.REMOVE_ITEM_FROM_CART:
      if (findItem(state.shoppingCart, action.item)) {
        return {
          ...state,
          shoppingCart: state.shoppingCart.filter(
            product => product.id !== action.item.id
          )
        };
      }
      return;
    default:
      return state;
  }
};

export default reducer;
