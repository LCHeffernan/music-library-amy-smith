const express = require("express");
const {
  createArtist,
  getArtists,
  getArtistById,
  putArtist,
  updateArtist,
  deleteArtist,
} = require("../controllers/artist");

const artistRouter = express.Router();

artistRouter.route("/").post(createArtist).get(getArtists);

artistRouter
  .route("/:id")
  .get(getArtistById)
  .put(putArtist)
  .patch(updateArtist)
  .delete(deleteArtist);

module.exports = artistRouter;
