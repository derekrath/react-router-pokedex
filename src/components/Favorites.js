import "./App.css";
import Grid from "@mui/material/Grid";
import SpacingGrid from "./SpacingGrid.js";
import { useContext } from "react";
import { AppContext } from "./AppContext.js";

const Favorites = () => {

  const { favorites } = useContext(AppContext);

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
