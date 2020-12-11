import * as actionTypes from './actionTypes';

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
export const handleQuantity = (item, operator) => {
  return {
    type: actionTypes.ADD_ONE,
    item,
    operator
  };
};
