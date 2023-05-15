const db = require("../src/db");

// eslint-disable-next-line no-undef
afterEach(async () => {
  await db.query("TRUNCATE Artists CASCADE");
});
