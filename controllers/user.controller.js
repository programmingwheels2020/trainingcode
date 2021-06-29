const User = require("../models/user.model");
const { generateToken } = require("../services/token.services");
const { hashPassword, comparePassword } = require("../services/utility.services")


const registration = async (req, res) => {

    try {
        console.log(req.body);
        console.log(hashPassword(req.body.password));
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword(req.body.password)
        })

        console.log(user);
        await user.save();
        res.json({ message: "Registreation successfull" })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }

}

const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            throw new Error("USER_DOESNOT_EXISTS");
        }

        if (!comparePassword(user.password, req.body.password)) {
            throw new Error("PASSWORD_INCORRECT");
        }
        let token = generateToken({ userId: user._id })
        res.json({ message: "Success", token: token });
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }
    res.json({ message: "Login Success" })
}

module.exports = {
    login,
    registration
}