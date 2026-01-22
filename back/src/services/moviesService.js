const Movie = require("../models/movie");

const getMoviesService = async () => {
  return await Movie.find();
};

const getMovieByIdService = (id) => {
  const movieFound = db.find((movie) => movie.id === Number(id));
  if (!movieFound)
    throw new Error(`La pelicula con id ${id} no fue encontrada`);

  return movieFound;
};

const createMovieService = async (movie) => {
  const newMovie = new Movie(movie);
  await newMovie.save();
  return newMovie;
};

module.exports = {
  getMoviesService,
  getMovieByIdService,
  createMovieService,
};
