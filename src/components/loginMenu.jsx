import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import './../style/Login.css'

const LoginMenu = () => {
  return (
    <div>
      <AppBar position="static" className="NavBar">
        <Toolbar variant="dense" >
          <Typography variant="h6" color="inherit" className="typeOfLetter">
            Mateify
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default LoginMenu;
