const express = require("express");
const {
  createArtist,
  getArtists,
  getArtistById,
  putArtist,
  updateArtist,
} = require("../controllers/artist");

const router = express.Router();

router.route("/").post(createArtist);

router.route("/").get(getArtists);

router.route("/:id").get(getArtistById);

router.route("/:id").put(putArtist);

router.route("/:id").patch(updateArtist);

module.exports = router;
