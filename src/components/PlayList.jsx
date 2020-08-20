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

const PlayList = () => {
  // 1 crear un campo de texto
  // 2 crear una table
  // 3 obtener el valor del input
  // 4 compararlo con las canciones usando una funcion filter

  const [inputValue, setInputValue] = useState("");
  const [listaFiltrada, setListaFiltrada] = useState([]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const filtrarCanciones = (cancion) => {
    // Aca filtro las canciones que coinciden con la busqueda
    if (cancion.name.includes(inputValue)) {
      return true;
    } else {
      return false;
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Se ejecuta el handleInputKeyPress");

      // primero me quedo con los resultyados filtrados
      const resultados = canciones.filter(filtrarCanciones);
      // despues actualizo el estado con esos resultados pora poder mostrarlos en el render
      setListaFiltrada(resultados);
    }
  };

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
                  <TableCell>ejemplo</TableCell>
                </TableRow>
              </TableBody>
          
        ))}
        </Table>
      </Paper>
    </div>
  );
};
export default PlayList;
