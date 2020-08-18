import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import "./../style/Login.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import DataUser from "./../dataBase/userData.json";
import NavBar from "./navBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

const LoginMenu = (props, e) => {
  const [inputUser, setInputUser] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  let history = useHistory();

  const inputContentChange = (e) => setInputUser(e.target.value);
  const inputPasswordChange = (e) => setInputPassword(e.target.value);

  const chequeaUsuariosConFilter = (element) => {
    if (element.email === inputUser && element.password === inputPassword) {
      return true;
    }
  };
  const chequeaUsuario = () => {
    const usuarios = DataUser.filter(chequeaUsuariosConFilter);
    if (usuarios.length > 0) {
      history.push("/createPlayList")
    } else {
      return false;
    }
  };
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>
        <Paper elevation={2} outlined className="loginContainer">
          <LockOutlinedIcon
            fontSize="large"
            className="iconLoginBg"
          ></LockOutlinedIcon>
          <Box mb="30px">
            <Typography variant="h5" className="displayBlock">
              INGRESAR
            </Typography>
          </Box>

          <form className="positionContent displayBlock">
            <Box mb="44px">
              <TextField
                variant="outlined"
                label="Correo electronico"
                className="loginInput"
                value={inputUser}
                onChange={inputContentChange}
              />
            </Box>
            <Box mb="44px">
              <TextField
                type="password"
                variant="outlined"
                label="Contraseña"
                className="loginInput"
                value={inputPassword}
                onChange={inputPasswordChange}
                mb="20px"
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                color="secondary"
                className="createPlatList"
                onClick={chequeaUsuario}
              >
                Comenzar a crear playlist
              </Button>
            </Box>
          </form>
          <Box mt="20px" pb="20px" className="forgotPassword">
            <Button className="forgotPasswordButton">
              ¿HAS OLVIDADO TU CONTRASEÑA?
            </Button>
          </Box>

          <Box mb="30px">
            <Button >¿NO TIENES CUENTA?</Button>
          </Box>
          <Box>
            <Button color="secondary" variant="outlined">
              REGISTRATE
            </Button>
          </Box>
        </Paper>
      </div>
    </div>
  );
};

export default LoginMenu;
