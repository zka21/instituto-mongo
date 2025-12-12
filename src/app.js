// src/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const alumnoRoutes = require('./routes/alumno.routes');

// Conectar a MongoDB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// OJO IMPORTANTE:
//
// En Vercel, todas las rutas dentro de /api ya tienen el prefijo /api.
// Por eso aquí usamos '/usuarios' y no '/api/usuarios'
app.use('/alumnos', alumnoRoutes);

module.exports = app;
