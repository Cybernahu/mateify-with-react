import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './../style/navBar.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    background: '#009688',
    alignItems: 'center',
  },
});

const NavBar = () =>{
  const classes = useStyles();
  return(
        <AppBar position="static" className="NavBar" className={classes.root} >
          <Toolbar variant="dense">
          <Avatar alt="Mateify Logo" src="./../components/LogoSoloBlanco.png" />
            <Typography variant="h6" color="inherit" className="typeOfLetter">
              Mateify
            </Typography>
          </Toolbar>
        </AppBar>
    )
}
export default NavBar;