const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Configura body-parser para manejar solicitudes JSON
app.use(bodyParser.json());

/********************GRAFOS*******************/

const graphlib = require("graphlib");

// Crear un nuevo grafo dirigido
const graph = new graphlib.Graph();

// Agregar nodos (vértices) al grafo
//Cada grafo es un interseccion
graph.setNode("A", { x: 0, y: 0 });
graph.setNode("B", { x: 2, y: 0 });
graph.setNode("C", { x: 3, y: 0 });
graph.setNode("D", { x: 4, y: 0 });
graph.setNode("E", { x: 6, y: 0 });
graph.setNode("F", { x: 7, y: 0 });
graph.setNode("G", { x: 0, y: 1 });
graph.setNode("H", { x: 1, y: 1 });
graph.setNode("I", { x: 2, y: 1 });
graph.setNode("J", { x: 4, y: 1 });
graph.setNode("K", { x: 6, y: 1 });
graph.setNode("L", { x: 0, y: 2 });
graph.setNode("M", { x: 1, y: 2 });
graph.setNode("N", { x: 3, y: 2 });
graph.setNode("O", { x: 4, y: 2 });
graph.setNode("P", { x: 5, y: 2 });
graph.setNode("Q", { x: 6, y: 3 });
graph.setNode("R", { x: 1, y: 3 });
graph.setNode("S", { x: 2, y: 3 });
graph.setNode("T", { x: 3, y: 3 });
graph.setNode("U", { x: 4, y: 3 });
graph.setNode("V", { x: 1, y: 4 });
graph.setNode("W", { x: 4, y: 4 });
graph.setNode("X", { x: 0, y: 5 });
graph.setNode("Y", { x: 1, y: 5 });
graph.setNode("Z", { x: 3, y: 5 });
graph.setNode("1", { x: 0, y: 6 });
graph.setNode("2", { x: 1, y: 6 });
graph.setNode("3", { x: 3, y: 6 });
graph.setNode("4", { x: 4, y: 7 });
graph.setNode("5", { x: 0, y: 9 });
graph.setNode("6", { x: 1, y: 8 });
graph.setNode("7", { x: 1, y: 9 });

// Agregar aristas (conexiones) al grafo
//Cada arista es una union entre intersecciones

/******************CREACION DE ARISTAS DE LOS GRAFOS****************/

//Avenidas con una sola direccion
//Av Jose granda
graph.setEdge("F", "E", { directed: true, weight: 1 });
graph.setEdge("E", "D", { directed: true, weight: 2 });
graph.setEdge("D", "C", { directed: true, weight: 1 });
graph.setEdge("C", "B", { directed: true, weight: 1 });
graph.setEdge("B", "A", { directed: true, weight: 2 });

//Av Genaro delgado
graph.setEdge("A", "G", { directed: true, weight: 1 });
graph.setEdge("G", "L", { directed: true, weight: 1 });
graph.setEdge("L", "X", { directed: true, weight: 3 });
graph.setEdge("X", "1", { directed: true, weight: 1 });
graph.setEdge("1", "5", { directed: true, weight: 3 });

//Av Proceres
graph.setEdge("7", "4", { directed: true, weight: 3 });
graph.setEdge("4", "Q", { directed: true, weight: 3 });
graph.setEdge("Q", "F", { directed: true, weight: 3 });

//Calles
graph.setEdge("H", "G", { directed: false, weight: 1 });
graph.setEdge("H", "M", { directed: false, weight: 1 });
graph.setEdge("H", "I", { directed: false, weight: 1 });

graph.setEdge("I", "B", { directed: false, weight: 1 });
graph.setEdge("I", "S", { directed: false, weight: 2 });

graph.setEdge("J", "O", { directed: false, weight: 1 });
graph.setEdge("J", "D", { directed: false, weight: 1 });

graph.setEdge("K", "E", { directed: false, weight: 1 });
graph.setEdge("K", "P", { directed: false, weight: 1 });

graph.setEdge("M", "L", { directed: false, weight: 1 });
graph.setEdge("M", "R", { directed: false, weight: 1 });

graph.setEdge("N", "C", { directed: false, weight: 2 });
graph.setEdge("N", "T", { directed: false, weight: 1 });
graph.setEdge("N", "O", { directed: false, weight: 1 });

graph.setEdge("O", "P", { directed: false, weight: 1 });
graph.setEdge("O", "U", { directed: false, weight: 1 });

graph.setEdge("P", "Q", { directed: false, weight: 1 });

graph.setEdge("R", "V", { directed: false, weight: 1 });
graph.setEdge("R", "S", { directed: false, weight: 1 });

graph.setEdge("S", "T", { directed: false, weight: 1 });

graph.setEdge("T", "U", { directed: false, weight: 1 });

graph.setEdge("U", "Q", { directed: false, weight: 2 });
graph.setEdge("U", "W", { directed: false, weight: 1 });

graph.setEdge("V", "Y", { directed: false, weight: 1 });
graph.setEdge("V", "W", { directed: false, weight: 3 });

graph.setEdge("W", "Z", { directed: false, weight: 1 });

graph.setEdge("X", "1", { directed: false, weight: 1 });
graph.setEdge("X", "Y", { directed: false, weight: 1 });

graph.setEdge("Y", "2", { directed: false, weight: 1 });
graph.setEdge("Y", "Z", { directed: false, weight: 2 });

graph.setEdge("Z", "3", { directed: false, weight: 1 });

graph.setEdge("1", "2", { directed: false, weight: 1 });
graph.setEdge("1", "5", { directed: false, weight: 3 });

graph.setEdge("2", "6", { directed: false, weight: 2 });
graph.setEdge("2", "3", { directed: false, weight: 2 });

graph.setEdge("3", "6", { directed: false, weight: 2 });
graph.setEdge("3", "4", { directed: false, weight: 1 });

graph.setEdge("4", "7", { directed: false, weight: 3 });
graph.setEdge("4", "Q", { directed: false, weight: 3 });

graph.setEdge("5", "6", { directed: false, weight: 1 });
graph.setEdge("5", "7", { directed: false, weight: 1 });


/*******************************************************************/

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
  const todosLosGrafos = graph.nodes();
  console.log(todosLosGrafos);
});
