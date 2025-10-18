CREATE DATABASE peliculas_db;
\c peliculas_db;

CREATE TABLE IF NOT EXISTS peliculas (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    release_year INT NOT NULL
);

-- 10 registros de ejemplo
INSERT INTO peliculas (title, director, release_year) VALUES
('Inception', 'Christopher Nolan', 2010),
('The Dark Knight', 'Christopher Nolan', 2008),
('Pulp Fiction', 'Quentin Tarantino', 1994),
('The Shawshank Redemption', 'Frank Darabont', 1994),
('The Godfather', 'Francis Ford Coppola', 1972),
('Forrest Gump', 'Robert Zemeckis', 1994),
('The Matrix', 'The Wachowskis', 1999),
('Fight Club', 'David Fincher', 1999),
('Interstellar', 'Christopher Nolan', 2014),
('The Lord of the Rings: The Return of the King', 'Peter Jackson', 2003);
