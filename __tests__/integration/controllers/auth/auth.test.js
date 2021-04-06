const request = require("supertest");
const app = require("../../../../src/app");
const factory = require("../../../factories/users.factory");

describe("Authentication", () => {
    describe("[POST] /signup", () => {
        it("should return 201 and create user", async() => {
            const user = await factory.attrs('users');
            const response = await request(app)
                .post("/signup")
                .send({
                    email: user.email,
                    password: "123123"
                });
            
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('id');
        });

        it("should return 401 and not create user", async() => {
            const user = await factory.attrs('users');
            const response = await request(app)
                .post("/signup")
                .send({
                    email: user.email,
                    password: "123123"
                });
            
            expect(response.status).toBe(401);
            expect(response.body).toHaveProperty('message');
        });
    });

    describe("[POST] /signin", () => {
        it("should return 200 and login user", async() => {
            const user = await factory.attrs('users');
            const response = await request(app)
                .post("/signin")
                .send({
                    email: user.email,
                    password: "123123"
                });
            
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id');
        });

        it("should return 401 and not login user", async() => {
            const user = await factory.attrs('users');

            const response = await request(app)
                .post("/signin")
                .send({
                    email: user.email,
                    password: "12345"
                });
            
            expect(response.status).toBe(401);
            expect(response.body).toHaveProperty('message');
        });
    });
});

