import './App.css';
import React from 'react';
import { NavLink, Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import Cart from './Cart';
import Products from './Products';
import Home from './Home';
import Product from './Product';

function App() {
  // let match = useRouteMatch();
  return (
    <div className="App">
      <Redirect to={`/home`} />
      <Switch>
                <Route exact path={`/home`} component={Home}>
                    <Home />
                </Route>
                <Route exact path={`/products/product`} component={Product}>
                    <Product />
                </Route>
                <Route exact path={`/products`} component={Products}>
                    <Products />
                </Route>
                <Route exact path={`/cart`} component={Cart}>
                    <Cart />
                </Route>
            </Switch>
    </div>
  );
}

export default App;


// Home page
// Products page
// Individual product page
// View cart
// Checkout page