const movieDataValidation = (req, res, next) => {
  const campos = [
    "title",
    "year",
    "director",
    "duration",
    "genre",
    "rate",
    "poster",
  ];
  const camposFiltrados = campos.filter((campo) => !req.body[campo]);

  if (camposFiltrados.length > 0) {
    return res.status(404).json({
      message: `falta información para crear la película: ${camposFiltrados.join(
        ", "
      )}`,
    });
  }
  next();
};

module.exports = movieDataValidation;
