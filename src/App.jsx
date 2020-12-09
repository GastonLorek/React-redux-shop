import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ProductsList from './components/ProductsList/ProductsList';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  return (
    <div>
      <Header />
      <ShoppingCart />
      <Switch>
        <Route exact path="/">
          <ProductsList />
        </Route>
        <Route exact path="/product/:id">
          <ProductPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
