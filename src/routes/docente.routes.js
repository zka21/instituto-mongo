// src/routes/usuario.routes.js
const express = require('express');
const Docente = require('../models/Docente');

const router = express.Router();

// @route   GET /api/alumnos
// @desc    Obtener todos los alumnos
router.get('/', async (req, res) => {
  try {
    const docentes = await Docente.find();
    res.json(docentes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener docentes', error: error.message });
  }
});

module.exports = router;