const { Users } = require("../models");
const { v4: uuidv4 } = require('uuid');
const PasswordCrypto = require("../utils/PassowordCrypto");

module.exports = new class AuthController {

    constructor(passwordCrypto = PasswordCrypto) {
        this.passwordCrypto = passwordCrypto;
    }
    
    async signup(req, res) {

        try {

            const { email, password } = req.body;
            let user = await Users.findOne({ where: { email: email } });

            if (!user) {
                user = await Users.create({
                    id: uuidv4(),
                    email: email,
                    password: this.passwordCrypto.encrypt(password)
                });

                return res.status(201).json(user);
            }
            
            return res.status(401).json({ message: "User already exists" });

        } catch(error){
            throw new Error(error.message);
        }
    }

    async signin(req, res) {

        try {

            const { email, password } = req.body;
            let user = await Users.findOne({ where: { email: email } });

            if (!user) {
                return res.status(401).json({ message: "User not found" });
            }
 
            if(this.passwordCrypto.encrypt(password) != user.password){
                return res.status(401).send({ message: "Invalid Email or Password" });
            }

            return res.status(200).json(user);

        } catch(error){
            throw new Error(error.message);
        }
    }
}      
