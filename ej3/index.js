let array = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
const express = require("express");
const app = express();

app.get("/persona", function (req, res) {
  res.send(`Esta es la lista completa de personas ${array}`); //muestra todos los nombres del array
});

//aqui se crea un switch para acceder al nombre de cada uno del array si coincide con uno de los nombres del switch entonces mostrara su nombre
/* app.get("/persona/:nombre", function (req, res) {
  let nombre = req.params.nombre.toLowerCase();
  switch (nombre) {
    case "homer":
      res.send(`Estás llamando a ${array[0]}`);
      break;
    case "marge":
      res.send(`Estás llamando a ${array[1]}`);
      break;
    case "bart":
      res.send(`Estás llamando a ${array[2]}`);
      break;
    case "lisa":
      res.send(`Estás llamando a ${array[3]}`);
      break;
    case "maggie":
      res.send(`Estás llamando a ${array[4]}`);
      break;
    default:
      res.send("No estás llam(ando a nadie");
  }
}); */

//recuerda que en la primera ruta si en la url no se ha metido el parametro patata  te mostrara el primer app.get porque accede a lo que ya ha leido y como no hay parametro no se mostraria este de aqui abajo
app.get("/persona/:patata", function (req, res) {
  let nombre = req.params.patata;
  console.log(nombre);
  //asi recorres el array y busca el nombre dentro del array mediante el parametro
  let encontrado =false
  for (let i = 0; i < array.length; i++) {
    if (nombre === array[i]) {
      encontrado =true
      res.send(`Has elegido a ${array[i]}`)//recuerda el res.send no funciona igual que el document.getElementById() porque envia el contenido dentro del servidor;
    }
  }
  encontrado ===false
  ? res.send("Lo que has elegido no existe")
  : console.log("hola")
});

app.listen(process.env.PORT || 3000);
