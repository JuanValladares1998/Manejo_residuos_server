const express = require("express");
const router = express.Router();
const connection = require("../database/db");
const bcrypt = require("bcrypt");

// Ruta para el registro de usuarios
router.post('/user/register', async (req, res) => {
    const { nombre, email, contraseña } = req.body;
  
    // Encriptar la contraseña antes de almacenarla
    const hashedContraseña = await bcrypt.hash(contraseña, 10);
  
    // Verificar si el correo electrónico ya existe
    const emailExistente = await new Promise((resolve, reject) => {
      const sql = 'SELECT COUNT(*) AS count FROM usuarios WHERE email = ?';
      connection.query(sql, [email], (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result[0].count > 0);
      });
    });
  
    if (emailExistente) {
      res.status(409).send('Correo electrónico ya registrado');
      return;
    }
  
    // Si el correo electrónico no existe, proceder con la inserción
    const sql = 'INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)';
    connection.query(sql, [nombre, email, hashedContraseña], (err, result) => {
      if (err) {
        console.error('Error al registrar usuario:', err);
        res.status(500).send('Error al registrar usuario');
        return;
      }
  
      res.status(200).send('Usuario registrado correctamente');
      return;
    });
  });

// Ruta para el inicio de sesión
router.post("/user/login", async (req, res) => {
  const { email, contraseña } = req.body;

  const sql = "SELECT * FROM usuarios WHERE email = ?";
  connection.query(sql, [email], async (err, result) => {
    if (err) {
      console.error("Error al iniciar sesión:", err);
      res.status(500).send("Error al iniciar sesión");
      return;
    }

    if (result.length > 0) {
      const usuario = result[0];

      // Comparar la contraseña encriptada almacenada con la proporcionada
      const match = await bcrypt.compare(contraseña, usuario.contraseña);

      if (match) {
        res.status(200).send("Inicio de sesión exitoso");
      } else {
        res.status(401).send("Credenciales incorrectas");
      }
    } else {
      res.status(401).send("Credenciales incorrectas");
    }
  });
});

module.exports = router;
