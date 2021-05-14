function aleatorio() {
  return Math.floor(Math.random() * 10); //recuerda el math.floor() si te da un 7.67 ye dara 7
  //mat.random crea por ejemplo 0,63 y lo multiplicamos por 10 entonces seria 6,3 por lo tanto el math.florr daria un 6 que es donde añadira un numero en la posicion del array
}

module.exports = aleatorio;
