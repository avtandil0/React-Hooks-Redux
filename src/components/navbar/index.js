import React from "react"
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

const Navbar = () => {
    return (
        <div>
            <CssBaseline />
            <AppBar position="absolute">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Navbar
