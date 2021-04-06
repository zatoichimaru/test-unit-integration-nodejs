const routes = require("express").Router();
const AuthController = require("../controllers/AuthController");
const DashboardController = require("../controllers/DashboardController");

routes.get('/', (req, res) => {
    res.send('TEST API com unit & integration !!!');
});

routes.get("/dashboard", async(req, res) => DashboardController.index(req, res));
routes.post("/signup", async(req, res) => AuthController.signup(req, res));
routes.post("/signin", async(req, res) => AuthController.signin(req, res));

module.exports = routes;