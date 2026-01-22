const {
  getMoviesService,
  getMovieByIdService,
  createMovieService,
} = require("../services/moviesService");

const getMoviesController = async (req, res) => {
  const movies = await getMoviesService();
  res.status(200).json({
    message: "all movies",
    data: movies,
  });
};

const getMovieByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const repuestaDelServicio = await getMovieByIdService(id);
    res.status(200).json({
      message: "pelicula encontrada",
      data: respuestaDelServicio,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const createMovieController = async (req, res) => {
  try {
    const newMovie = await createMovieService(req.body);
    res.status(201).json({
      message: "ok",
      data: newMovie,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getMoviesController,
  getMovieByIdController,
  createMovieController,
};
