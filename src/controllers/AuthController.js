const Users = require("../models/Users");
const { v4: uuidv4 } = require('uuid');

module.exports = new class AuthController {
    async signup(req, res) {
        const { username, password } = req.body;
        let user = await Users.findOne({ where: { username:username } });

        if (!user) {
            user = await Users.create({
                id: uuidv4(),
                username: username,
                password: password
            });
        }

        return res.status(200).json(user);
    }


    async signin(req, res) {
        const { username, password } = req.body;
        const user = await Users.findOne({ where: { username:username } });

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        /*if (!(await user.checkPassword(password))) {
            return res.status(401).json({ message: "Incorrect password" });
        }*/

        return res.json({
            user
        });

    }
}