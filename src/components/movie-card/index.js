import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import GradeIcon from "@material-ui/icons/Grade";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import clsx from "clsx";
import Link from "@material-ui/core/Link";
import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  link: {
    fontSize: "1.25rem",
  },
  media: {
    height: 400,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function MediaCard(movie) {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
  }, []);


  function getImg(movie) {
    return "https://image.tmdb.org/t/p/w300/"+movie.poster_path
  }

  function getRouterPath(movie) {
    return "/movie/"+movie.id
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={getImg(movie.movie)}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <RouterLink to={getRouterPath(movie.movie)} className={classes.link} color="secondary"> {movie.movie.title}</RouterLink>
          {/* <Link to="/movie/15" className={classes.link} color="secondary">
            {movie.movie.title}
          </Link> */}
          <br></br>
          Release Date: {movie.movie.release_date}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <Link href="#" className={classes.link} color="secondary">
          View details »
        </Link> */}
        <RouterLink to={getRouterPath(movie.movie)} color="secondary" className={classes.link} color="secondary">
        View details »</RouterLink>

        <Chip
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          icon={<GradeIcon />}
          label={movie.movie.vote_average}
          color="secondary"
        />
      </CardActions>
    </Card>
  );
}
