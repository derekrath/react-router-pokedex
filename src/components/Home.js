import "./App.css";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import SpacingGrid from "./SpacingGrid.js";
import { ContactlessOutlined } from "@mui/icons-material";
import App from "../App.js";
import { useState, useEffect, useContext, createContext } from "react";
import { AppContext } from "./AppContext.js";

// function Home({ pokemonArray }) {
  function Home() {

    const {
      pokeList1, pokeList2, setList1,setList2, favorites, setFavorites, addFavorite, removeFavorite, isFavorite 
    } = useContext(AppContext);

  let pokemonList = [
    {
      label: "",
      imgPath: "",
    },
  ];
  if (pokeList1 !== null) {
    pokemonList = pokeList1;
  }

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Professor Haggerty's Pokédex</h1>
      </header>
      <p>First 10 Original Pokémon!</p>
      <br></br>

      {/* should probably add buttons to the cards to set favorites- use heart/ thumb icon?  */}
      <Grid container justifyContent="center" spacing={2}>
        {/* <SwipeableTextMobileStepper pokemonCollection={pokemonList} /> */}
      </Grid>
      <SpacingGrid pokemonCollection={pokemonList} />
    </div>
  );
}

export default Home;
