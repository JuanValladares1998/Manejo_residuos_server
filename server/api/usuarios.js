const express = require("express");
const router = express.Router();
const connection = require("../database/db");

router.get("/usuarios", (req, res) => {
  // Consulta a la base de datos
  const consulta = "SELECT * FROM usuarios";

  connection.query(consulta, (err, resultados) => {
    if (err) {
      console.error("Error al realizar la consulta:", err);
      return;
    }
    console.log("Resultados de la consulta:", resultados);
    connection.end();
    return res.json(resultados);
  });
});

// Ruta para agregar un nuevo item
router.post("/usuarios", (req, res) => {
  //   const newItem = req.body;
  //   const itemAgregado = itemsModelo.agregarNuevo(newItem);
  //   res.status(201).json(itemAgregado);
});

// Ruta para actualizar un item por su id
router.put("/usuarios/:id", (req, res) => {
  //   const id = req.params.id;
  //   const itemActualizado = itemsModelo.actualizarPorId(id, req.body);
  //   res.json(itemActualizado);
});

// Ruta para eliminar un item por su id
router.delete("/usuarios/:id", (req, res) => {
  //   const id = req.params.id;
  //   const itemEliminado = itemsModelo.eliminarPorId(id);
  //   res.json(itemEliminado);
});

module.exports = router;
