const express = require("express");
const {
  getAlbum,
  getAlbumById,
  createAlbum,
  deleteAlbum,
  putAlbum,
  updateAlbum,
} = require("../controllers/album");

const albumRouter = express.Router();

albumRouter.route("/artists/:id/albums").post(createAlbum);

albumRouter.route("/albums").get(getAlbum);

albumRouter.route("/albums/:id").get(getAlbumById);

albumRouter.route("/albums/:id").delete(deleteAlbum);

albumRouter.route("/albums/:id").put(putAlbum);

albumRouter.route("/albums/:id").patch(updateAlbum);

module.exports = albumRouter;
