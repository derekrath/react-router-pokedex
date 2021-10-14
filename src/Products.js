import './App.css';
import { NavLink, Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import Cart from './Cart';
// import Products from './Products';
import Home from './Home';
import Product from './Product';

const Products = () => {
    // let match = useRouteMatch();
    return (
        <>
        <header className="products-header">
            <h1>Products</h1>
            <p>
                <nav>
                <NavLink exact to={`/home`}> Home </NavLink>
                <NavLink exact to={`/products`}> Products </NavLink>
                <NavLink exact to={`/cart`}> View Cart </NavLink>
                </nav>
            </p>
        </header>
        <h1>Current Products</h1>
        <p>
            See what products we are currently selling:
        </p>
        <p>
            <NavLink exact to={`/products/product`}>Sale Item</NavLink>
        </p>
        </>
    );
}

export default Products;