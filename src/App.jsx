import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import './App.css';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ProductsList from './components/ProductsList/ProductsList';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header handleShoppingCart={() => setIsOpen(!isOpen)} />
      <ProductsList />
      <ShoppingCart
        isOpen={isOpen}
        handleShoppingCart={() => setIsOpen(!isOpen)}
      />
      {/* Footer */}
    </div>
  );
}

export default App;
