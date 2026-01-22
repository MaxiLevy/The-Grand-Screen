const cardsContainer = document.getElementById("cardsContainer");

function cardsload(cards) {
  cardsContainer.innerHTML = "";

  cards.forEach((card) => {
    const peliculasAgregadas = document.createElement("div");
    peliculasAgregadas.classList.add("peliculasAgregadas");

    peliculasAgregadas.innerHTML = `
      <img src="${card.poster}">
      <div style="height: 10px;"></div>
      <h6>${card.title}</h6>
      <p>Año: ${card.year}</p>
      <p>Género: ${card.genre}</p>
      <p>Duración: ${card.duration}</p>
      <p>calificación: ${card.rate}</p>
      <p>Director: ${card.director}</p>`;

    cardsContainer.appendChild(peliculasAgregadas);
  });
}

module.exports = cardsload;
