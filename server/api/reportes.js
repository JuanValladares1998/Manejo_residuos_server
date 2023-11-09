const express = require("express");
const router = express.Router();
const connection = require("../database/db");

// Ruta para obtener todos los reportes
router.get("/reportes", async (req, res) => {
  try {
    const sql = "SELECT * FROM reportes";
    const result = await query(sql);
    res.status(200).json(result);
  } catch (err) {
    console.error("Error al obtener reportes:", err);
    res.status(500).send("Error al obtener reportes");
  }
});

// Ruta para crear un nuevo reporte
router.post("/reportes", async (req, res) => {
  try {
    const { ubicacion, tipo_residuo, descripcion, estado, imagen, usuario_id } =
      req.body;
    const sql =
      "INSERT INTO reportes (ubicacion, tipo_residuo, descripcion, estado, imagen, usuario_id) VALUES (?, ?, ?, ?, ?, ?)";
    const result = await query(sql, [
      ubicacion,
      tipo_residuo,
      descripcion,
      estado,
      imagen,
      usuario_id,
    ]);
    res
      .status(201)
      .json({ id: result.insertId, mensaje: "Reporte creado correctamente" });
  } catch (err) {
    console.error("Error al crear reporte:", err);
    res.status(500).send("Error al crear reporte");
  }
});

// Ruta para obtener todos los reportes de un usuario por su ID
router.get("/reportes/usuario/:usuario_id", async (req, res) => {
  try {
    const usuario_id = req.params.usuario_id;
    const sql = "SELECT * FROM reportes WHERE usuario_id = ?";
    const result = await query(sql, [usuario_id]);
    res.status(200).json(result);
  } catch (err) {
    console.error("Error al obtener reportes por ID de usuario:", err);
    res.status(500).send("Error al obtener reportes por ID de usuario");
  }
});

// Ruta para actualizar un reporte por su ID
router.put("/reportes/:reporte_id", async (req, res) => {
  try {
    const reporte_id = req.params.reporte_id;
    const { ubicacion, tipo_residuo, descripcion, estado, imagen } = req.body;
    const sql =
      "UPDATE reportes SET ubicacion = ?, tipo_residuo = ?, descripcion = ?, estado = ?, imagen = ? WHERE id = ?";
    await query(sql, [
      ubicacion,
      tipo_residuo,
      descripcion,
      estado,
      imagen,
      reporte_id,
    ]);
    res.status(200).send("Reporte actualizado correctamente");
  } catch (err) {
    console.error("Error al actualizar reporte por ID:", err);
    res.status(500).send("Error al actualizar reporte por ID");
  }
});

// Ruta para eliminar un reporte por su ID
router.delete("/reportes/:reporte_id", async (req, res) => {
  try {
    const reporte_id = req.params.reporte_id;
    const sql = "DELETE FROM reportes WHERE id = ?";
    await query(sql, [reporte_id]);
    res.status(200).send("Reporte eliminado correctamente");
  } catch (err) {
    console.error("Error al eliminar reporte por ID:", err);
    res.status(500).send("Error al eliminar reporte por ID");
  }
});

// Función para ejecutar consultas SQL
function query(sql, params) {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// // Ruta para obtener todos los reportes
// router.get("/api/reportes", (req, res) => {
//   const sql = "SELECT * FROM reportes";
//   connection.query(sql, (err, result) => {
//     if (err) {
//       console.error("Error al obtener reportes:", err);
//       res.status(500).send("Error al obtener reportes");
//       return;
//     }

//     res.status(200).json(result);
//   });
// });

// // Ruta para crear un nuevo reporte
// router.post("/api/reportes", upload.single("imagen"), async (req, res) => {
//   const { ubicacion, tipo_residuo, descripcion, estado, usuario_id } = req.body;
//   const imagen = req.file ? req.file.filename : null;

//   const sql =
//     "INSERT INTO reportes (ubicacion, tipo_residuo, descripcion, estado, imagen, usuario_id) VALUES (?, ?, ?, ?, ?, ?)";
//   connection.query(
//     sql,
//     [ubicacion, tipo_residuo, descripcion, estado, imagen, usuario_id],
//     (err, result) => {
//       if (err) {
//         console.error("Error al crear reporte:", err);
//         res.status(500).send("Error al crear reporte");
//         return;
//       }

//       res
//         .status(201)
//         .json({ id: result.insertId, mensaje: "Reporte creado correctamente" });
//     }
//   );
// });

module.exports = router;
