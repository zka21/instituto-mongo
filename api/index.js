// api/index.js
const app = require('../src/app');

// Vercel con @vercel/node entiende que si exportas la app de Express,
// la convierte en una Function automáticamente.
module.exports = app;
