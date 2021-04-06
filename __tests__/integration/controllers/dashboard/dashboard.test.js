const request = require("supertest");
const app = require("../../../../src/app");
  
describe("Dashboard", () => {
    describe("[GET] /dashboard", () => {
        test("It should response the GET method", () => {
            return request(app)
                .get("/")
                .expect(200);
        });
    });
});