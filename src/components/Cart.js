import './App.css';
import { NavLink, Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
// import Cart from './Cart';
import Pokemon from './Pokemon';
import Home from './Home';
import Favorites from './Favorites';
import Types from './Types';

const Cart = () => {
    return (
        <>
        <header className="Home-header">
        <h1>Pokémon Merch in your Cart</h1>
      </header>
        <p>
            View or remove items from your cart:
        </p>
        </>
    );
}
export default Cart;