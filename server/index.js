const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Configura body-parser para manejar solicitudes JSON
app.use(bodyParser.json());

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
  console.log(`La API está escuchando en el puerto ${port}`);
});
