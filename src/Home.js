import './App.css';
import React from 'react';
import { NavLink, Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import Cart from './Cart';
import Products from './Products';
// import Home from './Home';
import Product from './Product';

function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <h1>The World's #1 E-Commerce Site</h1>
                    <nav>
                        <NavLink exact to={`/home`}> Home </NavLink>
                        <NavLink exact to={`/products`}> Products </NavLink>
                        <NavLink exact to={`/cart`}> View Cart </NavLink>
                    </nav>
            </header>
            <p>
                View our products:
            </p>
        </div>
    );
}

export default Home;