import { combineReducers } from 'redux';
import products from './products';
import shoppingCart from './shoppingCart';
import modal from './modal';

const rootReducer = combineReducers({
  products,
  shoppingCart,
  modal
});

export default rootReducer;
