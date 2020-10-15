import React from 'react';
import './Header.css';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

const Header = ({ handleShoppingCart }) => {
  return (
    <div className="header">
      <span>Logo</span>
      <div className="header__cart">
        <ShoppingCartSharpIcon onClick={handleShoppingCart} />
        <span>0</span>
      </div>
    </div>
  );
};

export default Header;
