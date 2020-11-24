import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, getCasts, getSimilarMovies } from "../../actions/actions";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import GradeIcon from "@material-ui/icons/Grade";
import CastCard from "../cast-card/index";
import Movies from "../movies/index";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import MovieCardList from "../common/MovieCardList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function Movie() {
  const [movie, setMovie] = useState({});
  const [similarMovie, setSimilarMovie] = useState({});
  const [casts, setCasts] = useState([]);
  const classes = useStyles();
  let { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  const movieReducerState = useSelector((state) => state.movieReducer);
  const castReducerState = useSelector((state) => state.castReducer);

  useEffect(() => {
    console.log("useEffect Movie ------------------- id ", id);
    dispatch(getMovie(id));
    dispatch(getCasts(id));
    dispatch(getSimilarMovies(id));
  }, []);

  useEffect(() => {
    console.log("useEffect Movie ------------------- id ", id);
    dispatch(getMovie(id));
    dispatch(getCasts(id));
    dispatch(getSimilarMovies(id));
  }, [id]);

  useEffect(() => {
    console.log(
      "useEffect Movie ------------------- movieReducerState ",
      movieReducerState
    );
    setMovie(movieReducerState.movie);
    setSimilarMovie(movieReducerState.similarMovies);
  }, [movieReducerState]);

  useEffect(() => {
    let csts =
      castReducerState && castReducerState.casts && castReducerState.casts.cast
        ? castReducerState.casts.cast.filter((item) => {
            return item.profile_path;
          })
        : [];
    csts = csts.slice(0, 4);
    setCasts(csts);
  }, [castReducerState]);

  function getImg(movie) {
    console.log("getImg Movie ------------------- ", movie);
    return "https://image.tmdb.org/t/p/w300/" + movie.poster_path;
  }

  function goToRoute(item) {
    history.push("/genres/" + item.id + "/" + item.name);
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img height="650" src={getImg(movie)} />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography color="textSecondary" variant="h5">
              {movie.title}
            </Typography>
            <Chip
              icon={<GradeIcon />}
              label={movie.vote_average}
              color="secondary"
            />
            <Typography color="textSecondary" variant="h6">
              {movie && movie.genres
                ? movie.genres.map((item, key) => (
                    <Chip
                      key={item.id}
                      label={item.name}
                      clickable
                      onClick={() => {
                        goToRoute(item);
                      }}
                      color="primary"
                      variant="outlined"
                    />
                  ))
                : ""}
            </Typography>
            <Typography color="textSecondary" variant="h6">
              Overview
            </Typography>
            <Typography color="textSecondary" variant="h6">
              {movie.overview}
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}></Paper>
              </Grid>

              {casts
                ? casts.map((item, key) => (
                    <Grid key={key} item xs={3}>
                      <CastCard key={item.id} cast={item} />
                    </Grid>
                  ))
                : ""}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <MovieCardList movies={similarMovie} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
