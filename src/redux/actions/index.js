import * as actionTypes from '../CONSTANTS';

export const toogleCart = () => {
  return {
    type: actionTypes.TOOGLE_CART
  };
};
export const addToCart = item => {
  return {
    type: actionTypes.ADD_TO_CART,
    item
  };
};
export const removeFromCart = item => {
  return {
    type: actionTypes.REMOVE_ITEM_FROM_CART,
    item
  };
};
export const handleQuantity = operator => {
  return {
    type: actionTypes.HANDLE_QUANTITY,
    operator
  };
};
export const resetQuantity = quantity => {
  return {
    type: actionTypes.RESET_QUANTITY,
    quantity
  };
};
export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART
  };
};
