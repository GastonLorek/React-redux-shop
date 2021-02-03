import axios from 'axios';
import * as actionType from '../CONSTANTS';

const fetchProductRequest = () => {
  return {
    type: actionType.FETCH_PRODUCT_REQUESTED
  };
};
const fetchProductSucces = product => {
  return {
    type: actionType.FETCH_PRODUCT_SUCCEDED,
    product
  };
};
const fetchProductFail = err => {
  return {
    type: actionType.FETCH_PRODUCT_FAILED,
    err
  };
};

export const fetchProduct = id => {
  return async dispatch => {
    dispatch(fetchProductRequest());
    try {
      const response = await axios.get(
        `https://storenodejsapi.herokuapp.com/api/v1/product/${id}`
      );
      const { data: { data: { product } = {} } = {} } = response || {};
      dispatch(fetchProductSucces(product));
    } catch (err) {
      dispatch(fetchProductFail(err.message));
    }
  };
};
