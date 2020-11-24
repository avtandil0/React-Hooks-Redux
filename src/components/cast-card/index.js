import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 340,
  },
});

export default function CastCard(props) {
  const classes = useStyles();
  const [cast, setCast] = useState({});

  useEffect(() => {
    console.log("useEffect CastCard -------", props);
    setCast(props.cast);
  }, []);

  function getImg(cast) {
    // console.log("cast cast cast cast", cast);
    return "https://image.tmdb.org/t/p/w500/" + cast.profile_path;
  }

  function getRouterPath(cast) {
    return "/movie/" + cast.profile_path;
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={getImg(cast)}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {cast.original_name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
