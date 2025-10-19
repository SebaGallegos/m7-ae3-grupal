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

// Rutas CRUD para peliculas
router.get('/', getAllPeliculas);
router.get('/:id', getPeliculaById);
router.post('/', createPelicula);
router.put('/:id', updatePelicula);
router.delete('/:id', deletePelicula);

module.exports = router;