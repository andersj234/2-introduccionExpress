const express = require("express");
const app = express();
//forma abreviada de la manera de abajo 
app.get("/:numero", function (req, res) { // cuando mete dos puntos y barra es el req.params que le ha llegado
  res.send(`${Math.floor(Math.random() * (req.params.numero - 1) + 1)}`); //crea un numero aleatorio entre 1 y el parametro que se ha metido. 
});

app.listen(3000);

/*app.get("/:numero", function(req,res){
  let numero = req.params.numero
  let aleatorio = Math.floor(Math.random()*(num-1)+1)
  res.send(`${aleatorio}`)
})*/