const request = require("supertest");
const app = require("../../../../src/app");
const factory = require("../../../factories/users.factory");

describe("Authentication", () => {
    describe("[POST] /signup", () => {
        it("should return 201 and create user", async() => {
            //PROBLEMA É O ASYNC ELE NÃO DA EXIT
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
            
            await expect(response.status).toBe(401);
            await expect(response.body).toHaveProperty('message');
        });
    });
});

