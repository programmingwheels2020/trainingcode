const mongoose = require("mongoose");
const Book = require("../models/book.model");

const createBook = async (req, res) => {

    try {

        console.log(req.body);
        const book = new Book({
            name: req.body.name,
            author: req.body.author,
            language: req.body.language,
            createdBy: req.userId
        })
        let result = await book.save();
        res.json({ data: result })
    } catch (err) {
        res.status(400).json({ err: err })
    }

}

const getBooks = async (req, res) => {
    try {
        let books = await Book.find({});
        res.json({ data: books });
    } catch (err) {
        res.status(400).json({ err: err })
    }
}

const getBookById = async (req, res) => {
    try {
        console.log(req.params.bookId)
        let book = await Book.findById(req.params.bookId);
        //let book = await Book.find({ _id: req.params.bookId });
        res.json({ data: book });
    } catch (err) {
        res.status(400).json({ err: err })
    }
}


module.exports = {
    createBook,
    getBooks,
    getBookById
}