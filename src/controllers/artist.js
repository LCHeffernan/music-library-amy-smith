exports.postArtist = (req, res) => {
  res.status(201).send({
    name: "Tame Impala",
    genre: "rock",
  });
};
