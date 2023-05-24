const { expect } = require("chai");
const request = require("supertest");
const db = require("../src/db");
const app = require("../src/app");

describe("Update Album", () => {
  let artist;
  beforeEach(async () => {
    const { rows } = await db.query(
      "INSERT INTO Artists (name, genre) VALUES( $1, $2) RETURNING *",
      ["Tame Impala", "rock"]
    );

    artist = rows[0];
  });

  describe("Delete Album", () => {
    let albums;
    beforeEach(async () => {
      const { rows } = await db.query(
        "INSERT INTO Albums (name, year, artist_id) VALUES( $1, $2, $3) RETURNING *",
        ["Sample jazz", 2022, artist.id]
      );

      albums = rows[0];
    });

    describe("PUT /albums/{id}", () => {
      it("replaces the album and returns the updated record", async () => {
        const { status, body } = await request(app)
          .put(`/albums/${albums.id}`)
          .send({
            name: "Sample Jazz",
            year: 2022,
          });

        expect(status).to.equal(200);

        expect(body).to.deep.equal({
          id: albums.id,
          name: "Sample Jazz",
          year: 2022,
          artist_id: artist.id,
        });
      });

      it("returns a 404 if the album does not exist", async () => {
        const { status, body } = await request(app)
          .put("/albums/999999999")
          .send();

        expect(status).to.equal(404);
        expect(body.message).to.equal("album 999999999 does not exist");
      });
    });

    describe("PATCH /albums/{id}", () => {
      it("updates the album and returns the updated record", async () => {
        const { status, body } = await request(app)
          .patch(`/albums/${albums.id}`)
          .send({
            name: "Sample Jazz",
            year: 2022,
          });

        expect(status).to.equal(200);

        expect(body).to.deep.equal({
          id: albums.id,
          name: "Sample Jazz",
          year: 2022,
          artist_id: artist.id,
        });
      });

      it("returns a 404 if the album does not exist", async () => {
        const { status, body } = await request(app)
          .patch("/albums/999999999")
          .send({ name: "something different", genre: "rock" });

        expect(status).to.equal(404);
        expect(body.message).to.equal("album 999999999 does not exist");
      });
    });
  });
});
