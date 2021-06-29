const express = require("express");
const { authMiddleware } = require("../controllers/authMiddleware");
const { createBook, getBooks, getBookById } = require("../controllers/book.controller")

const bookRouter = express.Router();

bookRouter.get("/", getBooks)

bookRouter.post("/", createBook)

bookRouter.get("/:bookId", getBookById)

bookRouter.put("/:bookId", (req, res) => {
    res.json({ message: "Success" })
})

bookRouter.delete("/:bookId", (req, res) => {
    res.json({ message: "Success" })
})



module.exports = bookRouter;