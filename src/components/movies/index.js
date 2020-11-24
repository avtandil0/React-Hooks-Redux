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
import Grid from "@material-ui/core/Grid";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import clsx from "clsx";
import Link from "@material-ui/core/Link";
import MovieCard from "../movie-card/index";
import MovieCardList from "../common/MovieCardList";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import InfoIcon from "@material-ui/icons/Info";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesByGenre } from "../../actions/actions";
import { BrowserRouter as Router, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Movies(props) {
  const [movies, setMovies] = useState(props.movies);
  const classes = useStyles();
  const dispatch = useDispatch();
  let { id } = useParams();

  const moviesByGenreState = useSelector((state) => state.movieByGenreReducer);

//   useEffect(() => {
//     setMovies
//   }, []);
useEffect(() => {
    console.log('Hello World *********************************');
    return () => {
        console.log('Do some cleanup ********************************');
    }
}, [])

  useEffect(() => {
    if (props.movies) {
      setMovies(props.movies);
    }
  }, [props]);

  useEffect(() => {
    setMovies({
      ...movies,
      results: moviesByGenreState.movies.results,
    });
  }, [moviesByGenreState]);

  useEffect(() => {
    if (id) {
        console.log('useEffect ------Movies -- id ',id)
      dispatch(getMoviesByGenre(id));
    }
  }, [id]);

  return (
    <div>
        <MovieCardList movies={movies} />
      {/* <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>

        {movies && movies.results
          ? movies.results.map((item, key) => (
              <Grid key={key} item xs={3}>
                <MovieCard key={item.id} movie={item} />
              </Grid>
            ))
          : ""}
      </Grid> */}
    </div>
  );
}
