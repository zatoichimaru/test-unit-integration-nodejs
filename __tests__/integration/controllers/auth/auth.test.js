  const request = require("supertest");
const app = require("../../../../src/app");
const factory = require("../../../factories/users.factory");

describe("Authentication", () => {

    beforeAll(async() => {
        user = await factory.attrs('users');
    });

    describe("[POST] /signup", () => {
        it("should return 201 and create user", async(done) => {

            const response = await request(app)
                .post("/signup")
                .send({
                    email: user.email,
                    password: user.password
                });
            
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('id');
            done();
        });
        
        it("should return 401 and not create user", async(done) => {

            const response = await request(app)
                .post("/signup")
                .send({
                    email: user.email,
                    password: user.password
                });
            
            expect(response.status).toBe(401);
            expect(response.body).toHaveProperty('message');
            done();
        });
    });

    describe("[POST] /signin", () => {
        it("should return 200 and login user", async(done) => {

            const response = await request(app)
                .post("/signin")
                .send({
                    email: user.email,
                    password: user.password
                });
            
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id');
            done();
        });

        it("should return 401 and not login user", async(done) => {

            const response = await request(app)
                .post("/signin")
                .send({
                    email: user.email,
                    password: '12345784'
                });
            
            expect(response.status).toBe(401);
            expect(response.body).toHaveProperty('message');
            done();
        });
    });
});