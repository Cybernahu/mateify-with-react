import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import "./../style/Login.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';

const LoginMenu = () => {
  return (
    <div>
      <header>
        <AppBar position="static" className="NavBar">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" className="typeOfLetter">
              Mateify
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <div>
        <Paper elevation={2} outlined className="loginContainer">
          <LockOutlinedIcon
            fontSize="large"
            className="iconLoginBg"
          ></LockOutlinedIcon>

          <Typography variant="h4" className="displayBlock">
            INGRESAR
          </Typography>

          <form className="positionContent displayBlock">
            <Box mb="44px">
              <TextField
                variant="outlined"
                label="Correo electronico"
                className="loginInput"
              />
            </Box>
            <Box mb="44px">
              <TextField
                variant="outlined"
                label="Contraseña"
                className="loginInput"
                mb="20px"
              />
            </Box>
            <Box>
              <Button variant="contained" color="secondary">
                Comenzar a crear playlist
              </Button>
            </Box>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default LoginMenu;
