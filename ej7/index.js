const express = require("express");
const app = express();

let operacion = require("./function");
let array = require("./array");
//const { response } =require ("express") esto es un objeto desde express pero no lo vamos a ver todavia

app.get("/numero", function (req, res) {
  array[operacion()] += 1; //empiezas todos en 0 pero asi le estamos añadiendo 1 al azar dentro del array

  res.send(array); //mandas el array
});

app.listen(3000);
