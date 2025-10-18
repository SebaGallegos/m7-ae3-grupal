const express = require('express');
const peliculasRouter = require('./routes/peliculas.route');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/peliculas', peliculasRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});