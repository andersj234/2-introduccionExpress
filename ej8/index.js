const express = require("express");
const app = express();

let operacion = require("./function");
let array = require("./array");

app.get("/numero", function (req, res) {
  array[operacion()] += 1;

  res.send(array);
});

app.get("/borrar/:numero", function (req, res) {
  let numero = req.params.numero; //en el parametro que le metamos del array borrara el numero

  numero < array.length && numero >= 0
    ? (array[numero] = 0) //la posicion del array se borrara
    : res.send("Tas pasao"); //aqui la mostrara si el numero del array si existe si no le mandara este mensaje

  res.send(array);
});

app.listen(3000);
