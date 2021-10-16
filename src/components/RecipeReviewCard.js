import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useEffect, useContext, createContext } from "react";
import App from "../App.js";
import { AppContext } from "./AppContext.js";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// export default function RecipeReviewCard({ pokemon }) {
  export default function RecipeReviewCard(pokeObj) {

    const [expanded, setExpanded] = useState(false);

    const {
      list, setList,favorites, setFavorites, addFavorite, removeFavorite, isFavorite 
    } = useContext(AppContext);
    const { pokeList1, pokeList2 } = list;
    
    console.log(`pokemon`, pokeObj.pokemon)
    // let pokemonObj= pokemon;
    let pokemonObj= pokeObj.pokemon;
    let spritesUrl= pokemonObj.sprites.front_default;
    let pokeName = pokemonObj.name;
      pokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
    let pokeId = pokemonObj.id;
    let pokeMoves = [];
    for (let e=0; e < pokemonObj.moves.length; e++) {
      pokeMoves.push(pokemonObj.moves[e].move.name);
    }
    let pokeType = pokemonObj.types[0].type.name;
    let pokeWeight = pokemonObj.weight;
    let pokeHeight = pokemonObj.height;

    let dataObj = {
      sprite: spritesUrl,
      name: pokeName,
      id: pokeId,
      moves: pokeMoves,
      type: pokeType,
      weight: pokeWeight,
      height: pokeHeight,
    };

    if (dataObj.id < 10) {
      dataObj.id = `0` + `${dataObj.id}`;
    }
    if (dataObj.id < 100) {
      dataObj.id = `0` + `${dataObj.id}`;
    }

    // let favorites = useContext(favorites);
    // let removeFavorite = useContext(favContext.removeFavorite);
    // let addFavorite = useContext(favContext.addFavorite);

    function handleChange(){
      if (favorites.includes(pokemonObj.name)) {
        favorites.removeFavorite(pokemonObj.name)
      } else {
        favorites.addFavorite(pokemonObj.name)
      }
    }

    function handleExpandClick() {
      setExpanded(!expanded);
    };

    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              P
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={`${dataObj.name}`}
        />
        <CardMedia
          component="img"
          height="194"
          image={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${dataObj.id}.png`}
          alt="Pokemon Image"
        />
        <CardContent>
          <></>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton 
            onClick={handleChange}
            aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography variant="body2" color="text.secondary">
            {`ID: ${dataObj.id} `}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Type: ${dataObj.type} `}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Height: ${dataObj.height}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Weight: ${dataObj.weight}`}
          </Typography>
          <img src={ (dataObj.sprite) } />
            {/* <Typography paragraph>{`Move-set:`}</Typography>
            {dataObj.moves.map((move) => (
                <Typography paragraph>{move}</Typography>
            ))} */}
          </CardContent>
        </Collapse>
      </Card>
    );
}
