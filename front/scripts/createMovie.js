const axios = require("axios");
function createMovie() {
  const form = document.querySelector("form");

  const getSelectedGenres = () => {
    const checkboxes = document.querySelectorAll(
      "#genreCheckboxes input[type=checkbox]:checked"
    );
    return Array.from(checkboxes).map((cb) => cb.value);
  };

  form.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const newMovie = {
      title: document.getElementById("titleInput").value.trim(),
      genre: getSelectedGenres(),
      director: document.getElementById("directorInput").value.trim(),
      rate: document.getElementById("ratingInput").value.trim(),
      year: Number(document.getElementById("yearInput").value.trim()),
      duration: document.getElementById("durationInput").value.trim(),
      poster: document.getElementById("urlInput").value.trim(),
    };

    if (
      !newMovie.title ||
      !newMovie.director ||
      !newMovie.rate ||
      !newMovie.year ||
      !newMovie.duration ||
      newMovie.genre.length === 0 ||
      !newMovie.poster
    ) {
      return alert("Faltan datos para crear la Película");
    }

    console.log("Enviando:", newMovie);

    try {
      const res = await axios.post("http://localhost:3000/movies", newMovie, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 201) {
        alert("Película creada con éxito");
        form.reset();
      }
    } catch (error) {
      console.error(
        "Error al crear Película:",
        error.response?.data || error.message
      );
    }
  });

  document.querySelector(".reset-btn").addEventListener("click", () => {
    form.reset();
  });
}

module.exports = createMovie;
