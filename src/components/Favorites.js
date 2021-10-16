import "./App.css";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import SpacingGrid from "./SpacingGrid.js";
import { ContactlessOutlined } from "@mui/icons-material";
import App from "../App.js";
import { useState, useEffect, useContext, createContext } from "react";
import { AppContext } from "./AppContext.js";

const Favorites = () => {

  const {
    pokeList1, pokeList2, setList1,setList2, favorites, setFavorites, isFav, setIsFav, addFavorite, removeFavorite
  } = useContext(AppContext);

  return (
    <div className="Favorites">
      <header className="Favorites-header">
        <h1>Your Favorites</h1>
      </header>
      <br></br>
      {/* should probably add buttons to the cards to set favorites- use heart/ thumb icon?  */}
      <Grid container justifyContent="center" spacing={2}>
        {/* <SwipeableTextMobileStepper pokemonCollection={pokemonList} /> */}
      </Grid>
      <SpacingGrid pokemonCollection={favorites} />
    </div>
  );
};
export default Favorites;
