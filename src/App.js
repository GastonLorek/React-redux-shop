import React, { useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header handleShoppingCart={() => setIsOpen(!isOpen)} />
      <ShoppingCart isOpen={isOpen} />
      {/* Body */}
      {/* Footer */}
    </div>
  );
}

export default App;
