const { Router } = require('express');
const {
  getAllPeliculas,
  getPeliculaById,
  createPelicula,
  updatePelicula,
  deletePelicula,
} = require('../controllers/peliculas.controller');

const router = Router();

// definir rutas

module.exports = router;