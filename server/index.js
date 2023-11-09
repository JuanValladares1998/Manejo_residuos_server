const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Configura body-parser para manejar solicitudes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//funciones para los grafos
const { findOptimalPath, cityMap } = require("./grafos");

//Rutas API
const usuariosRutas = require("./api/usuarios");
const reportesRutas = require("./api/reportes");
app.use("/api", usuariosRutas);
app.use("/api", reportesRutas);

app.listen(port, () => {
  console.log("Servidor listo");
  //const todosLosGrafos = graph.nodes();
  // console.log(todosLosGrafos);
  //const distanceAB = getDistanceBetweenManzanas(graph, "A", "G");
  //console.log(`Distancia entre manzana A y manzana B: ${distanceAB}`);
  //Imprimir ruta mas optima
  // const optimalRoute = findOptimalPath(cityMap);
  // console.log("Ruta más óptima:", optimalRoute.path);
  // console.log("Distancia total:", optimalRoute.distance);
});
