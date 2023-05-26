const { expect } = require("chai");
const request = require("supertest");
const db = require("../src/db");
const app = require("../src/app");

describe("create album", () => {
  let artist;
  beforeEach(async () => {
    const { rows } = await db.query(
      "INSERT INTO Artists (name, genre) VALUES( $1, $2) RETURNING *",
      ["Tame Impala", "rock"]
    );

    artist = rows[0];
  });

  describe("/artists/{id}/albums", () => {
    describe("POST", () => {
      it("creates a new album in the database", async () => {
        const id = artist.id;
        const { status, body } = await request(app)
          .post(`/artists/${id}/albums`)
          .send({
            name: "Sample Jazz",
            year: 2022,
          });

        expect(status).to.equal(201);
        expect(body.name).to.equal("Sample Jazz");
        expect(body.year).to.equal(2022);

        const {
          rows: [albumData],
        } = await db.query(`SELECT * FROM Albums WHERE id = ${body.id}`);
        expect(albumData.name).to.equal("Sample Jazz");
        expect(albumData.year).to.equal(2022);
        expect(albumData.artist_id).to.equal(artist.id);
      });
    });
  });
});
