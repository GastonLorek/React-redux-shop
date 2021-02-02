import { combineReducers } from 'redux';
import products from './products';
import shoppingCart from './shoppingCart';
import modal from './modal';

export default combineReducers({
  products,
  shoppingCart,
  modal
});
