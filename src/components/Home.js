import "./App.css";
import Grid from "@mui/material/Grid";
// import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import SpacingGrid from "./SpacingGrid.js";
// import { ContactlessOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { AppContext } from "./AppContext.js";

  function Home() {

    const { pokeList1 } = useContext(AppContext);

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
      <p>First 4 Starter Pokémon!</p>
      <br></br>
      <Grid container justifyContent="center" spacing={2}>
        {/* <SwipeableTextMobileStepper pokemonCollection={pokemonList} /> */}
      </Grid>
      <SpacingGrid pokemonCollection={pokemonList} />
    </div>
  );
}

export default Home;
