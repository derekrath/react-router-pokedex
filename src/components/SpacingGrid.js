import * as React from 'react';
import Grid from '@mui/material/Grid';
import RecipeReviewCard from './RecipeReviewCard.js';
import App from "../App.js";
import { useState, useEffect, useContext, createContext } from "react";
import { AppContext } from "./AppContext.js";


export default function SpacingGrid({pokemonCollection}) {

  const [spacing, setSpacing] = React.useState(2);

  const jsx = `<Grid container spacing={${spacing}}>`;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {pokemonCollection
        .map((pokemon, value) => (
            <Grid key={value} item>
              <RecipeReviewCard pokemon={pokemon} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
