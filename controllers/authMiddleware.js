const { validateToken } = require("../services/token.services")
const authMiddleware = async (req, res, next) => {
    try {
        let decodedValue = validateToken(req.headers['x-access-token']);
        console.log(decodedValue);
        req.userId = decodedValue.userId;
        next();
    } catch (err) {
        res.status(401).json({ errMsg: err.message })
    }

}

module.exports = {
    authMiddleware
}
