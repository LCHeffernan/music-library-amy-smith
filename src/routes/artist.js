const express = require("express");
const {
  createArtist,
  getArtists,
  getArtistById,
  putArtist,
} = require("../controllers/artist");

const router = express.Router();

router.route("/").post(createArtist);

router.route("/").get(getArtists);

router.route("/:id").get(getArtistById);

router.route("/:id").put(putArtist);

module.exports = router;
