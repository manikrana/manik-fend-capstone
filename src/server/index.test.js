const app = require("./index");
const supertest = require("supertest");

test("GET /simpletest", (done) => {
  supertest(app)
    .get("/simpletest")
    .expect(200, JSON.stringify({ movie: "Titanic" }))
    .end(done);
});
