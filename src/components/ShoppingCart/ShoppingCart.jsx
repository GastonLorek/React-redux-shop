import React, { useEffect } from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ isOpen }) => {
  return (
    <div className={isOpen ? 'shoppingcart__show' : 'shoppingcart__hide'}></div>
  );
};

export default ShoppingCart;
