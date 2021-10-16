import "./App.css";
import { NavLink, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import SpacingGrid from "./SpacingGrid.js";
import { ContactlessOutlined } from "@mui/icons-material";
import { useState, useEffect, useContext, createContext } from "react";
import { AppContext } from "./AppContext.js";

const Pokemon = () => {

  const {
    pokeList1, pokeList2, setList1,setList2, favorites, setFavorites, addFavorite, removeFavorite, isFavorite 
  } = useContext(AppContext);

  let pokemonList = [
    {
      label: "",
      imgPath: "",
    },
  ];
  if (pokeList2 !== null) {
    pokemonList = pokeList2;
  }

  return (
    <>
    <div className="Pokemon">
      <header className="Pokemon-header">
        <h1>Original 150 Pokémon</h1>
      </header>
      <br></br>
      <Grid container justifyContent="center" spacing={2}>
      </Grid>
      <SpacingGrid pokemonCollection={pokemonList} />
    </div>
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
