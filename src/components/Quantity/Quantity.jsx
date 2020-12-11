import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleQuantity } from '../../store/actions/index';
import { Button } from '@material-ui/core';

const Quantity = () => {
  const dispatch = useDispatch();
  const { quantity } = useSelector(state => state.shoppingCart);
  return (
    <div>
      <Button onClick={dispatch(handleQuantity())}>+</Button>
      <span>{quantity}</span>
      <Button onClick={dispatch(handleQuantity())}>-</Button>
    </div>
  );
};

export default Quantity;
