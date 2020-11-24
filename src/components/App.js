import React from "react";
import Navbar from "./navbar";
import Main from "./main";
import NavDrawer from "./drawer/NavDrawer";
import Header from "./header/header";
import Movies from "./movies/index";
import Body from "./body/index";
import Loader from "./loader/loader";
import "./App.css";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const setting = useSelector((state) => state.settingReducer);
  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <Header />
        {/* <Loader /> */}
        <NavDrawer />
        <Body />
      </Router>
    </div>
  );
}

export default App;
