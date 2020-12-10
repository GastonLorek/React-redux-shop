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
