const pool = require('../db/pool');

// Obtener todas las películas
const getAllPeliculas = async (req, res) => {
  try {
    const result = await pool.query('SELECT id, title, director, release_year FROM peliculas ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error('getAllPeliculas error', err);
    res.status(500).json({ error: 'Error al obtener las películas' });
  }
};

// Obtener una película por ID
const getPeliculaById = async (req, res) => {
  const { id } = req.params;
  if (!/^[0-9]+$/.test(id)) return res.status(400).json({ error: 'ID inválido' });
  try {
    const result = await pool.query('SELECT id, title, director, release_year FROM peliculas WHERE id = $1', [id]);
    if (result.rowCount === 0) return res.status(404).json({ error: 'Película no encontrada' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error('getPeliculaById error', err);
    res.status(500).json({ error: 'Error al obtener la película' });
  }
};

// Ingresar una nueva película
const createPelicula = async (req, res) => {
  const { title, director, release_year } = req.body;
  if (!title || !director || !release_year) return res.status(400).json({ error: 'Faltan campos requeridos' });
  try {
    const result = await pool.query(
      'INSERT INTO peliculas (title, director, release_year) VALUES ($1, $2, $3) RETURNING id, title, director, release_year',
      [title, director, release_year]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('createPelicula error', err);
    res.status(500).json({ error: 'Error al crear la película' });
  }
};

// Actualizar una película por ID
const updatePelicula = async (req, res) => {
  const { id } = req.params;
  const { title, director, release_year } = req.body;
  if (!/^[0-9]+$/.test(id)) return res.status(400).json({ error: 'ID inválido' });
  try {
    const result = await pool.query(
      'UPDATE peliculas SET title = COALESCE($1, title), director = COALESCE($2, director), release_year = COALESCE($3, release_year) WHERE id = $4 RETURNING id, title, director, release_year',
      [title, director, release_year, id]
    );
    if (result.rowCount === 0) return res.status(404).json({ error: 'Película no encontrada' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error('updatePelicula error', err);
    res.status(500).json({ error: 'Error al actualizar la película' });
  }
};

// Eliminar una película por ID
const deletePelicula = async (req, res) => {
  const { id } = req.params;
  if (!/^[0-9]+$/.test(id)) return res.status(400).json({ error: 'ID inválido' });
  try {
    const result = await pool.query('DELETE FROM peliculas WHERE id = $1 RETURNING id', [id]);
    if (result.rowCount === 0) return res.status(404).json({ error: 'Película no encontrada' });
    res.json({ message: 'Película eliminada', id: result.rows[0].id });
  } catch (err) {
    console.error('deletePelicula error', err);
    res.status(500).json({ error: 'Error al eliminar la película' });
  }
};

module.exports = {
  getAllPeliculas,
  getPeliculaById,
  createPelicula,
  updatePelicula,
  deletePelicula,
};