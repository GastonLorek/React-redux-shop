import React from 'react';
import './Backdrop.css';

const Backdrop = ({ show, children, handleShoppingCart }) =>
  show ? (
    <div className="backdrop" onClick={handleShoppingCart}>
      {children}
    </div>
  ) : null;

export default Backdrop;
