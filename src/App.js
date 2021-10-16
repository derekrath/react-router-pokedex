import * as React from "react";
import "./components/App.css";
import Home from "./components/Home.js";
import Pokemon from "./components/Pokemon.js";
import Types from "./components/Types.js";
import Favorites from "./components/Favorites.js";
import Cart from "./components/Cart.js";
import { Switch, Redirect, Route } from "react-router-dom";
import SearchAppBar from "./components/SearchAppBar.js";
import { useState, useEffect } from "react";

//var pokemonArray = React.createContext();

function App() {
  // const [pokeList, setPokeList] = useState(null);

  // useEffect(() => {
  // async function getPokemonSubset() {
    let pokeList = [];
    for (let i=1; i < 11; i++){
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        pokeList.push(data);
        return pokeList;
      });
      // setPokeList(pokeList);
    }
    console.log(`pokeList: `, pokeList)

    let pokeList2 = [];
    for (let j=1; j < 152; j++){
      fetch(`https://pokeapi.co/api/v2/pokemon/${j}`)
      .then((res2) => {
        return res2.json();
      })
      .then((data2) => {
        pokeList2.push(data2);
        return pokeList2;
      });
      // setPokeList(pokeList);
    }
    // console.log(`pokeList:`, pokeList)
    // return pokeList;
  // };
  // getPokemonSubset();
  // }, []);

  let favArray = [];

  return (
    <>
      <div className="App">
        <SearchAppBar title="Professor Haggerty's PokeDex" />

        <Switch>
          <Route
            exact
            path={`/home`}
            render={(props) => <Home pokemonArray={pokeList} />}
          ></Route>
          <Route
            exact
            path={`/pokemon`}
            render={(props) => <Pokemon pokemonArray={pokeList2} />}
          ></Route>
          {/* <Route exact path={`/pokemon`} component={Pokemon}></Route> */}
          <Route exact path={`/favorites`} component={Favorites}></Route>
          <Route exact path={`/types`} component={Types}></Route>
          <Route exact path={`/cart`} component={Cart}></Route>
          <Route exact path={`/favorites`}
            render={(props) => <Favorites favArray={favArray} />}
          />
          <Redirect to={`/home`} />
        </Switch>
      </div>
    </>
  );
}

export default App;
