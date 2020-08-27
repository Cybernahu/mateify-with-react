import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import NavBar from "./navBar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./../style/PlayList.css";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import canciones from "./../dataBase/songData.json";
import AddCircle from "@material-ui/icons/AddCircle";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const PlayList = () => {
  // 1 agregar un boton con onClick
  // 2 leer el valor de la cancion que el usuario quiere agregar y guardar ese valor
  // 3 guardar ese valor y mostrarlo en lalista
  const [inputValue, setInputValue] = useState("");
  const [listaFiltrada, setListaFiltrada] = useState([]);
  const [playList, setPlayList] = useState([]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const filtrarCanciones = (cancion) => {
    if (cancion.name.includes(inputValue)) {
      return true;
    } else {
      return false;
    }
  };
  const filtrarCancionesUuid = (cancion) => {
    if (cancion.uuid(canciones.uuid)) {
      return true;
    } else {
      return false;
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      // primero me quedo con los resultyados filtrados
      const resultados = canciones.filter(filtrarCanciones);
      // despues actualizo el estado con esos resultados pora poder mostrarlos en el render
      setListaFiltrada(resultados);
    }
  };
  const handleAddSong = (e , uuid) =>{
    //filter para encontrar la cancion
    // agregarla al playlist con setPlaylist
    setPlayList(nwSong);
  }




  return (
    <div>
      <NavBar />
      <div className="searchIput">
        <input
          placeholder="Buscar"
          onChange={handleInputValue}
          onKeyPress={handleInputKeyPress}
        />
      </div>

      <Paper className="secondTableContainer">
        <Box ml="15px" my="15x">
          <Typography className="firstTableTitle">Resultado</Typography>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Artista</TableCell>
              <TableCell>Album</TableCell>
              <TableCell>Duración</TableCell>
              <TableCell>Agregar</TableCell>
            </TableRow>
          </TableHead>

          {listaFiltrada.map((canciones) => (
            <TableBody>
              <TableRow>
                <TableCell>{canciones.name}</TableCell>
                <TableCell>{canciones.artist.name}</TableCell>
                <TableCell>{canciones.album}</TableCell>
                <TableCell>{canciones.duration}</TableCell>
                <TableCell>
                  <AddCircle
                    onClick={ ( canciones ) => {
                      handleAddSong(canciones.uuid);
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </Paper>
      <Paper className="secondTableContainer">
        <Box ml="15px" my="15x">
          <Typography className="firstTableTitle">Tu playlist</Typography>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Artista</TableCell>
              <TableCell>Album</TableCell>
              <TableCell>Duración</TableCell>
              <TableCell>Votar</TableCell>
            </TableRow>
          </TableHead>

          {listaFiltrada.map((canciones) => (
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <ThumbUpAltIcon /> <ThumbDownIcon />{" "}
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </Paper>
    </div>
  );
};
export default PlayList;
