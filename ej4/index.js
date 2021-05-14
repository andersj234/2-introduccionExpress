const express = require("express");
const app = express();

let saludo = require("./function"); // has cogido la funcion asi 

app.get("/string", function (req, res) {
  res.send(saludo()); //aqui muestras la funcion que dice hola patatita
});

app.listen(3000);
