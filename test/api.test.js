const request = require("supertest");

const app = require("../src/config");
const { PORT } = require("../src/constants");

beforeEach(() => {
  app.listen(PORT, () => console.log(`Server lifted at port ${PORT}`));
});

afterEach(() => {
  app.close();
});

describe("Tests for API", () => {});
