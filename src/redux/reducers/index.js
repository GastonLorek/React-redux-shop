import { combineReducers } from 'redux';
import modal from './modal';
import products from './products';
import productPage from './producPage';
import shoppingCart from './shoppingCart';

const rootReducer = combineReducers({
  products,
  shoppingCart,
  modal,
  productPage
});

export default rootReducer;
