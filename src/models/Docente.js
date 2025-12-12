// src/models/Usuario.js
const mongoose = require('mongoose');

const docenteSchema = new mongoose.Schema(
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
        correo: {
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
    },
    {
        timestamps: true, // createdAt y updatedAt
    }
);

const Docente = mongoose.model('docentes', docenteSchema);

module.exports = Docente;
