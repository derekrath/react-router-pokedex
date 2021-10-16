import "./App.css";
import { NavLink, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import SpacingGrid from "./SpacingGrid.js";
import { ContactlessOutlined } from "@mui/icons-material";

const Pokemon = ({pokemonArray}) => {
  let pokemonList = [
    {
      label: "",
      imgPath: "",
    },
  ];
  if (pokemonArray !== null) {
    pokemonList = pokemonArray;
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
