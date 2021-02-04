import axios from 'axios';
import * as actionType from '../CONSTANTS';

const fetchProductRequest = () => {
  return {
    type: actionType.FETCH_PRODUCTS_REQUESTED
  };
};
const fetchProductSucces = products => {
  return {
    type: actionType.FETCH_PRODUCTS_SUCCEDED,
    products
  };
};
const fetchProductFail = err => {
  return {
    type: actionType.FETCH_PRODUCTS_FAILED,
    err
  };
};

export const fetchProducts = () => {
  return async dispatch => {
    dispatch(fetchProductRequest());
    try {
      const response = await axios.get(
        'https://storenodejsapi.herokuapp.com/api/v1/getProducts'
      );
      const { data: { data: { products } = {} } = {} } = response || {};
      dispatch(fetchProductSucces(products));
    } catch (err) {
      dispatch(fetchProductFail(err.message));
    }
  };
};
