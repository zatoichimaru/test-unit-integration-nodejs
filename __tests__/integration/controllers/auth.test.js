const request = require("supertest");
const app = require("../../../src/app");

describe("Authentication", () => {
    test("It should response the POST method", async() => {
        const user =  {
            username: "contato@williamtenorio.com.br",
            password: "123123"
        }

        const response = await request(app)
            .post("/signin")
            .send(user);

        expect(response.status).toEqual(200);
    });
});

describe("Dashboard", () => {
    test("It should response the GET method", () => {
        return request(app)
          .get("/")
          .expect(200);
    });
});