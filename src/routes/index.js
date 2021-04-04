const routes = require("express").Router();
const AuthController = require("../controllers/AuthController");

routes.get('/', (req, res) => {
    res.send('TEST API com unit & integration !!!');
});
routes.post("/signup", (req, res) => AuthController.signup(req, res));
routes.post("/signin", (req, res) => AuthController.signin(req, res));
routes.get("/dashboard", (req, res) => {
    return res.status(200).send("dashboard");
});

module.exports = routes;