const express = require("express");
const bodyParser = require("body-parser");
// const {
//   getDistanceBetweenManzanas,
//   nearestNeighborTSP,
// } = require("./functions");

const app = express();
const port = 3000;

// Configura body-parser para manejar solicitudes JSON
app.use(bodyParser.json());

// Importar la conexión a la base de datos
const connection = require("./database/db");
const { findOptimalPath, cityMap } = require("./grafos");

// Consulta a la base de datos
const consulta = "SELECT * FROM usuarios";

connection.query(consulta, (err, resultados) => {
  if (err) {
    console.error("Error al realizar la consulta:", err);
    return;
  }

  console.log("Resultados de la consulta:", resultados);

  // Puedes procesar los resultados aquí
});

// Simulación de una lista de elementos
const items = [];

// Ruta para obtener todos los elementos
app.get("/api/items", (req, res) => {
  res.json(items);
});

// Ruta para agregar un nuevo elemento
app.post("/api/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Ruta para actualizar un elemento por su índice
app.put("/api/items/:index", (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < items.length) {
    items[index] = req.body;
    res.json(items[index]);
  } else {
    res.status(404).send("Elemento no encontrado");
  }
});

// Ruta para eliminar un elemento por su índice
app.delete("/api/items/:index", (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < items.length) {
    const deletedItem = items.splice(index, 1);
    res.json(deletedItem[0]);
  } else {
    res.status(404).send("Elemento no encontrado");
  }
});

app.listen(port, () => {
  //const todosLosGrafos = graph.nodes();
  // console.log(todosLosGrafos);
  //const distanceAB = getDistanceBetweenManzanas(graph, "A", "G");
  //console.log(`Distancia entre manzana A y manzana B: ${distanceAB}`);

  //Imprimir ruta mas optima
  // const optimalRoute = findOptimalPath(cityMap);
  // console.log("Ruta más óptima:", optimalRoute.path);
  // console.log("Distancia total:", optimalRoute.distance);
});
