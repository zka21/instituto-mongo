// src/models/Usuario.js
const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        apellido: {
            type: String,
            required: true,
            trim: true,
        },
        dni: {
            type: String,
            required: true,
            trim: true,
        },
        edad: {
            type: Number,
            required: false,
        },
        genero: {
            type: String,
            required: true,
            trim: true,
        },
        direccion: {
            type: String,
            required: true,
        },
        telefono: {
            type: String,
            required: true,
            trim: true,
        },
        programa_estudios: {
            type: String,
            required: true,
        },
        fecha_ingreso: {
            type: String,
            required: true,
            trim: true,
        },
        semestre: {
            type: Number,
            required: false,
        },
    },
    {
        timestamps: true, // createdAt y updatedAt
    }
);

const Alumno = mongoose.model('alumnos', alumnoSchema);

module.exports = Alumno;
