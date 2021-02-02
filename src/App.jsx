import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ShoppingCart from './containers/ShoppingCart/ShoppingCart';
import ProductsList from './containers/ProductsList/ProductsList';
import ProductPage from './containers/ProductPage/ProductPage';

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
