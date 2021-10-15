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

export default function RecipeReviewCard({ pokemon }) {
  const [expanded, setExpanded] = React.useState(false);
  const [dataObj, setDataObj] = React.useState({});

  function handleExpandClick() {
    setExpanded(!expanded);

    async function getPokeInfo() {
      let res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${{ pokemon }["pokemon"]["name"]}`
      );
      let json = await res.json();
      let spritesUrl = await json.sprites["back_default"];
      let pokeName = await json.name;
      let pokeId = await json.id;
      let pokeMoves = await json.moves;
      let pokeType = await json.types;
      let pokeWeight = await json.weight;
  
      let Obj = {
        sprite: spritesUrl,
        name: pokeName,
        id: pokeId,
        moves: pokeMoves,
        type: pokeType,
        weight: pokeWeight,
      };
  
      console.log("Obj call: ", {Obj});
  
      setDataObj({
        dataObj: Obj
      });
  
      console.log("Obj call: ", dataObj);
  
      return dataObj;
    };
  };

  // getPokeInfo

  return (
    <Card sx={{ maxWidth: 345 }}>
      {console.log("Data Obj: ", { dataObj })}
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
        title={dataObj.name}
      />
      <CardMedia
        component="img"
        height="194"
        image={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${dataObj.id}.png`}
        alt="Pokemon Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {`Type: ${dataObj.type} `}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`ID: ${dataObj.id} `}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Moves: ${dataObj.moves}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Weight: ${dataObj.weight}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
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
          <Typography paragraph>{dataObj.moves}</Typography>
          <Typography paragraph>{dataObj.moves}</Typography>
          <Typography paragraph>{dataObj.moves}</Typography>
          <Typography>{dataObj.moves}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
