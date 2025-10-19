# m7-ae3

Esta actividad consiste en un CRUD utilizando los paquetes npm Express y pg para conectarse a una base de datos local. Se ha implementado la separación de intereses por capas para las rutas y controladores.

## Autores

* Sebastián Gallegos Frías.
* Carlos Pizarro Morales.

## How-to:

1. Primero, clona el repositorio y crea tu propio archivo `.env` siguiendo el modelo de [`.env.example`](./.env.example). 
2. Luego puedes testear los endpoints como te de la gana: puedes usar un cliente como Bruno/Postman, crear tu propia interface web para darle a los endpoints o simplemente correr las queries con `curl`. Recomendamos algo como [`jq`](https://jqlang.org) para que se mire más mono el resultado. Acá los endpoints (agrega "| jq" si tienes jq):

```bash
# Obtener todas las pelis
curl http://localhost:3000/peliculas

# Obtener una por id
curl http://localhost:3000/peliculas/10

# Crear una peli
# OJO: el separador multilínea \ creo que no funca en Windows.
curl -X POST http://localhost:3000/peliculas \
  -H 'Content-Type: application/json' \
  -d '{"title":"New Movie","director":"Director Name","release_year":2025}'


# Actualizar (UPDATE) una pelicula. 
curl -X PUT http://localhost:3000/peliculas/1 \
  -H 'Content-Type: application/json' \
  -d '{"title":"Updated Title"}'

# Eliminar una peli
curl -X DELETE http://localhost:3000/peliculas/1
```

Todos los endpoints han sido testeados en el entorno local y van 10/10. (Creo)

