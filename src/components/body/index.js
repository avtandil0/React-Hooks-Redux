import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
import Movies from "../movies/index";
import NotFoundPage from "../NotFoundPage/index";
import Movie from "../movie/index";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../actions/actions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Body() {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const moviesState = useSelector((state) => state.movieReducer);

  useEffect(() => {
    dispatch(getMovies());
    console.log("useEffect Body -------------------", moviesState);
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <Switch>
        <Route exact path="/">
          <Movies movies={moviesState.movies } />
        </Route>
        {/* <Route path="/movie/:id"></Route> */}
        <Route path="/movie/:id" children={<Movie />} />
        <Route path="/genres/:id/:name" children={<Movies />} />
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  );
}
