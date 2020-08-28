import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './../style/navBar.css';


const NavBar = () =>{
  return(
        <AppBar position="static" className="NavBar">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" className="typeOfLetter">
              Mateify
            </Typography>
          </Toolbar>
        </AppBar>
    )
}
export default NavBar;