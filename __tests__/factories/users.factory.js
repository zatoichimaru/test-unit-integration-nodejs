const faker = require("faker");
const { factory } = require("factory-girl");
const { Users } = require("../../src/models");

factory.define("users", Users, {
    email: faker.internet.email(),
    password: faker.internet.password()
});

module.exports = factory;