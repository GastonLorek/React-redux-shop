import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ProductsList from './components/ProductsList/ProductsList';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header handleShoppingCart={() => setIsOpen(!isOpen)} />
          <ShoppingCart
            isOpen={isOpen}
            handleShoppingCart={() => setIsOpen(!isOpen)}
          />
          <ProductsList />
        </Route>
        <Route exact path="/product">
          <Header handleShoppingCart={() => setIsOpen(!isOpen)} />
          <ShoppingCart
            isOpen={isOpen}
            handleShoppingCart={() => setIsOpen(!isOpen)}
          />
          <ProductPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
