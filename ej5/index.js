const express = require("express");
const app = express();

let objeto = {
  nombre: "Juan",
  apellido: "Pedro",
  edad: 50,
};

app.get("/nombre/:name", function (req, res) {
  objeto.nombre = req.params.name; //accede a juan para que el parametro de la url sea juan y se envie el nombre
  res.send(objeto.nombre);
});

app.get("/apellido/:surname", function (req, res) {
  objeto.apellido = req.params.surname;//accede a pedro para que el parametro de la url sea pedro y se envie el apellido
  res.send(objeto.apellido);
});

app.get("/edad/:age", function (req, res) {
  objeto.edad = req.params.age;//accede a 50 años para que el parametro de la url sea 50 y se envie la edad
  res.send(objeto.edad);
});

app.get("/persona", function (req, res) {
  res.send(objeto); //aqui enviamos todo el contenido del objeto
});

app.listen(3000); //ocupe el espacio listen para mostrar la información
