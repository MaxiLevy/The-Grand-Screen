const { Router } = require("express");
const {
  getMoviesController,
  getMovieByIdController,
  createMovieController,
} = require("../controllers/moviesController");
const movieDataValidation = require("../middlewares/index.js");

const moviesRouter = Router();

moviesRouter.get("/movies", getMoviesController);
moviesRouter.get("/:id", getMovieByIdController);
moviesRouter.post("/movies", movieDataValidation, createMovieController);

module.exports = moviesRouter;
