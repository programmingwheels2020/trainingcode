const express = require("express")
const { login, registration } = require("../controllers/user.controller")

const userRoute = express.Router();

userRoute.post("/login", login)
userRoute.post("/register", registration)

module.exports = userRoute;