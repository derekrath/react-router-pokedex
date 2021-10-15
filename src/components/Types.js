import "./App.css";
import {
  NavLink,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from "react-router-dom";

const Types = () => {
  // let match = useRouteMatch();
  return (
    <>
      <header className="products-header">
        <h1>Pokemon Types (not all inclusive yet)</h1>
      </header>
      <p>
        <ul>
          <li>Rock</li>
          <li>Water</li>
          <li>Fire</li>
          <li>Grass</li>
          <li>Poison</li>
          <li>Ghost</li>
          <li>Normal</li>
          <li>Steel</li>
          <li>Fairy</li>
          <li>Ice</li>
          <li>Dragon</li>
          <li>Space Cadet</li>
        </ul>
      </p>
    </>
  );
};

export default Types;
