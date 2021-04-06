const request = require("supertest");
const app = require("../../../../src/app");
  
describe("Dashboard", () => {
    describe("[GET] /dashboard", () => {
        test("It should response the GET method", async(done) => {
            const response = await request(app)
                .get("/dashboard");

            expect(response.status).toBe(200);
            done();
        });
    });
});