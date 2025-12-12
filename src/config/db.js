// src/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error('No está definida la variable MONGODB_URI en el archivo .env');
    }

    await mongoose.connect(uri);

    console.log('✅ Conectado a MongoDB correctamente');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error.message);
    process.exit(1); // Cierra la app si falla la conexión
  }
};

module.exports = connectDB;
