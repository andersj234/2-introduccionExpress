const express = require("express");
const app = express();

let array = [
  "Hugo",
  "Ander",
  "Rocio",
  "Blas",
  "Victor",
  "Jorge",
  "Brahyam",
  "Pablo",
  "Naroa",
];

app.get("/:anyadir", function (req, res) {
  let anyadir = req.params.anyadir;
  array.push(anyadir); // aqui lo que hacemos es meter dentro del array el parametro que se meta dentro de nuestro array y mostrara todo el contenido del array dejando la ultima posicion de lo que se ha metido el ultimo
  res.send(array); //cada parametro que metas va a meter el contenido al final del array por ejemplo si yo meto javier y luego refresco la pagina y meto miguel todos los parametros anteriores se guardaran
});

app.listen(3000);
