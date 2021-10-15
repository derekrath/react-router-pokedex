import "./App.css";
import {
  NavLink,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Types from "./Types.js";

const Pokemon = () => {
  // let match = useRouteMatch();
  // let {productId} = useParams();

  return (
    <>
      <header className="Home-header">
        <h1>All 150 Original Pokémon</h1>
      </header>
      <p>Pokémon Information:</p>
      <p>
        <Link exact to={`/types`}>
          Pokémon Types
        </Link>
      </p>
    </>
  );
};
export default Pokemon;
