import * as React from "react";
import "./components/App.css";
import Home from "./components/Home.js";
import Pokemon from "./components/Pokemon.js";
import Types from "./components/Types.js";
import Favorites from "./components/Favorites.js";
import Cart from "./components/Cart.js";
import { Switch, Redirect, Route } from "react-router-dom";
import SearchAppBar from "./components/SearchAppBar.js";
import { useState, useEffect, useContext, createContext } from "react";
import RecipeReviewCard from "./components/RecipeReviewCard";
import { AppContext } from "./components/AppContext.js";

function App() {

  const {
    pokeList1, pokeList2, setList1,setList2, favorites, setFavorites, addFavorite, removeFavorite, isFavorite 
  } = useContext(AppContext);

  return (
    <>
      <div className="App">
        {/* <AppContext.Provider value={list1Context, list2Context, favoritesContext, favFuncContext}> */}
        <SearchAppBar title="Professor Haggerty's PokeDex" />
        <Switch>
          {/* <Route
            exact
            path={`/home`}
            render={(props) => <Home pokeList={pokeList1} />}
          ></Route> */}
          <Route exact path={`/home`} component={Home}></Route>
          {/* <Route
            exact
            path={`/pokemon`}
            render={(props) => <Pokemon pokeList={pokeList2} />}
          ></Route> */}
          <Route exact path={`/pokemon`} component={Pokemon}></Route>
          <Route exact path={`/types`} component={Types}></Route>
          <Route exact path={`/cart`} component={Cart}></Route>
          <Route exact path={`/favorites`} component={Favorites}></Route>
          {/* <Route exact path={`/favorites`}
            render={(props) => <Favorites favorites={favorites} />}
          /> */}
          <Redirect to={`/home`} />
        </Switch>
      </div>
    </>
  );
}

export default App;
