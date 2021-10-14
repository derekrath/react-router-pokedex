import './App.css';
import { NavLink, Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import Cart from './Cart';
import Products from './Products';
import Home from './Home';
// import Product from './Product';


const Product = () => {
    // let match = useRouteMatch();
    // let {productId} = useParams();

    return (
        <>
        <header className="product-header">
            <h1>Sale Item</h1>
            <p>
                <nav>
                    <NavLink exact to={`/home`}> Home </NavLink>
                    <NavLink exact to={`/products`}> Products </NavLink>
                    <NavLink exact to={`/cart`}> View Cart </NavLink>
                </nav>
            </p>
        </header>
        <h2>Today's Sale Item</h2>
        <p>
            Here is today's sale item:
        </p>
        </>
    );
}
export default Product;