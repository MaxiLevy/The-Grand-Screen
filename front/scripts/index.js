const cardsload = require("./cardsload.js");
const axios = require("axios");
const createMovie = require("./createMovie");

const path = location.pathname;

if (path.includes("index")) {
  const obtenerPeliculas = async () => {
    try {
      const response = await axios.get("http://localhost:3000/movies");
      const data = response.data.data;
      cardsload(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  obtenerPeliculas();
} else if (path.includes("createMovie")) {
  createMovie();
}
