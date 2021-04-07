const { Users } = require("../models");
const { v4: uuidv4 } = require('uuid');

module.exports = new class DashboardController {
    async index(req, res) {
        return res.status(200).json({ message: "Dashboard" });
    }
}      
