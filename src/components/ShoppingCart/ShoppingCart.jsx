import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../UI/Backdrop/Backdrop';
import './ShoppingCart.css';

const ShoppingCart = ({ isOpen, handleShoppingCart }) => {
  return (
    <>
      <Backdrop show={isOpen} handleShoppingCart={handleShoppingCart} />
      <div className={isOpen ? 'shoppingcart__show' : 'shoppingcart__hide'}>
        <div className="shoppingcart__header">
          <span className="ShoppingCart__header-title">
            <p>
              <strong>Your Cart</strong>
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;

ShoppingCart.propTypes = {
  isOpen: PropTypes.func.isRequired,
  handleShoppingCart: PropTypes.func
};
