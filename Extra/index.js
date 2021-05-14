let cesta = [];
let almacen = require("./almacen");
const express = require("express");
const app = express();

app.get("/departamento/:dep", function (req, res) {
  let found = false;
  let parrafo = "";
  for (let i = 0; i < almacen.length; i++) {
    if (almacen[i].departamento.toLowerCase() === req.params.dep) {
      //hacemos que si el departamento existe entre en el if y lo convierta true con un operador logico
      found = true;
      for (let j = 0; j < almacen[i].productos.length; j++) {
        //accedemos al array de productos para mostrar el nombre, precio y el stock
        parrafo += `<tr><td>${almacen[i].productos[j].nombre}</td><td>${almacen[i].productos[j].precio}</td><td>${almacen[i].productos[j].stock}</td></tr>`;
      }
      break;
    }
  }
  found === true
    ? res.send(`<table>${parrafo}</table>`) // si found es true mostrara el parrafo dentro del for
    : res.send("El departamento no existe");
});

app.get("/departamento/:dep/comprar/:producto/:cantidad", function (req, res) {
  //console.log(req.params.dep, req.params.producto, req.params.cantidad);
  let dep = false;
  let prod = false;
  for (let i = 0; i < almacen.length && !dep; i++) {
    if (almacen[i].departamento.toLowerCase() === req.params.dep) {
      dep = true; //convierte departamento en true para que no repita el bucle si encuentra 1 ya la primera vez
      for (let j = 0; j < almacen[i].productos.length && !prod; j++) {
        if (almacen[i].productos[j].nombre === req.params.productos) { //si departamento existe busca los productos
          prod = true; //si existe ese producto entra en el if
          if (almacen[i].productos[j].stock >= req.params.cantidad) { //comprueba si hay stock de los productos y si no manda un error de no hay stock suficiente
            cesta.push({
              producto: almacen[i].productos[j].nombre,
              cantidad: req.params.cantidad,
              precio: almacen[i].productos[j].precio,
            }); //añade a la cesta que es un arrai vacio el nombre de producto, la cantidad que quiere y el precio dek producto
            almacen[i].productos[j].stock -= req.params.cantidad;//resta de la cantidad del stock la cantidad que ha cogido el usuario
            res.send(cesta);
            break;
          } else {
            res.send("No hay stock suficiente");
            break;
          }
        }
      }
    }
  }
  if (!dep) {
    res.send("Departamento no encontrado"); //si no encuentra departamento envia este mensaje
  }
  if (!prod) {
    res.send("Producto no encontrado");//si no encuentra producto envia este mensaje
  }
});

app.get("/cesta", function (req, res) {
  let parrafo = "";
  for (let i = 0; i < cesta.length; i++) { // imprime la el producto, la cantidad y el precio y la envia 
    parrafo += `<tr><td>${cesta[i].producto}</td><td>${
      cesta[i].cantidad
    }</td><td>${cesta[i].cantidad * cesta[i].precio}€</td></tr>`;
  }
  res.send(`<table>${parrafo}</table>`);
});

app.get("/pagar", function (req, res) {
  cesta = []; //vacia la cesta para una siguiente compra y envia el mensaje de que se ha realizado la compra
  res.send("La compra ha sido realizada");
});

app.listen(3000);
