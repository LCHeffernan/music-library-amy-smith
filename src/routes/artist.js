const express = require("express");
const { postArtist } = require("../controllers/artist");

const router = express.Router();

router.route("/").post(postArtist);

module.exports = router;
