const jwt = require("jsonwebtoken");
const jwtSecret = "ThisIsNotMySecret";

const generateToken = (payload) => {
    let token = jwt.sign(payload, jwtSecret);
    return token;
}

const validateToken = (token) => {
    return jwt.verify(token, jwtSecret);
}

module.exports = {
    generateToken,
    validateToken
}
