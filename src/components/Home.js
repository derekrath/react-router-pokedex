import "./App.css";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import SpacingGrid from "./SpacingGrid.js";

function Home({ pokemonArray }) {
  //still need to collect the first ten items from the array and process

  // //develop new image, etc. array from pokemon API
  const images = [
    {
      label: { pokemonArray }.name,
      imgPath: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${
        { pokemonArray }.number
      }.png`,
    },
    {
      label: { pokemonArray }.name,
      imgPath: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${
        { pokemonArray }.number
      }.png`,
    },
    {
      label: { pokemonArray }.name,
      imgPath: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${
        { pokemonArray }.number
      }.png`,
    },
    {
      label: { pokemonArray }.name,
      imgPath: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${
        { pokemonArray }.number
      }.png`,
    },
  ];
  console.log(`pokemonArray:`, pokemonArray)


  let pokemonList = [
    {
      label: "",
      imgPath: "",
    },
  ];
  if (pokemonArray !== null) {
    pokemonList = { pokemonArray }.pokemonArray.results;
  }

  // `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemonNumber}.png`

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Professor Haggerty's Pokédex</h1>
      </header>
      <p>Pokémon!</p>

      {/* should probably add buttons to the cards to set favorites- use heart/ thumb icon?  */}
      <Grid container justifyContent="center" spacing={2}>
        {/* <SwipeableTextMobileStepper images={images} /> */}
      </Grid>
      {console.log("Home: ", pokemonList)}
      <SpacingGrid images={pokemonList} />
    </div>
  );
}

export default Home;
