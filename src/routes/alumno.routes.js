// src/routes/usuario.routes.js
const express = require('express');
const Alumno = require('../models/Alumno');

const router = express.Router();

// @route   GET /api/alumnos
// @desc    Obtener todos los alumnos
router.get('/', async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener alumnos', error: error.message });
  }
});

// @route   POST /api/usuarios
// @desc    Crear un usuario
// router.post('/', async (req, res) => {
//   try {
//     const { nombre, email, edad } = req.body;

//     const nuevoUsuario = new Usuario({ nombre, email, edad });
//     const usuarioGuardado = await nuevoUsuario.save();

//     res.status(201).json(usuarioGuardado);
//   } catch (error) {
//     res.status(400).json({ message: 'Error al crear usuario', error: error.message });
//   }
// });

// // @route   GET /api/usuarios/:id
// // @desc    Obtener un usuario por ID
// router.get('/:id', async (req, res) => {
//   try {
//     const usuario = await Usuario.findById(req.params.id);

//     if (!usuario) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }

//     res.json(usuario);
//   } catch (error) {
//     res.status(400).json({ message: 'ID inválido', error: error.message });
//   }
// });

// // @route   PUT /api/usuarios/:id
// // @desc    Actualizar un usuario
// router.put('/:id', async (req, res) => {
//   try {
//     const { nombre, email, edad } = req.body;

//     const usuarioActualizado = await Usuario.findByIdAndUpdate(
//       req.params.id,
//       { nombre, email, edad },
//       { new: true } // devuelve el actualizado
//     );

//     if (!usuarioActualizado) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }

//     res.json(usuarioActualizado);
//   } catch (error) {
//     res.status(400).json({ message: 'Error al actualizar usuario', error: error.message });
//   }
// });

// // @route   DELETE /api/usuarios/:id
// // @desc    Eliminar un usuario
// router.delete('/:id', async (req, res) => {
//   try {
//     const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);

//     if (!usuarioEliminado) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }

//     res.json({ message: 'Usuario eliminado correctamente' });
//   } catch (error) {
//     res.status(400).json({ message: 'Error al eliminar usuario', error: error.message });
//   }
// });

module.exports = router;
