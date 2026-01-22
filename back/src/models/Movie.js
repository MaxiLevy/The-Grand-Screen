const mongoose = require("mongoose");

const movieObject = {
  title: String,
  year: Number,
  director: String,
  duration: String,
  genre: [String],
  rate: Number,
  poster: String,
};

const movieSchema = new mongoose.Schema(movieObject);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
