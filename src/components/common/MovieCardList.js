import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MovieCard from "../movie-card/index";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 340,
  },
});

export default function MovieCardList(props) {
  const classes = useStyles();
  const [movies, setMovies] = useState(props.movies);

  useEffect(() => {
      console.log('useEffect ------MovieCardList----',props)
    if (props.movies) {
      setMovies(props.movies);
    }
  }, [props]);

  return (
    <div>
      <Grid container spacing={3}>
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
      </Grid>
    </div>
  );
}
