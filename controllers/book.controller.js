const mongoose = require("mongoose");
const logger = require("../config/logger");
const Book = require("../models/book.model");

const createBook = async (req, res, next) => {

    try {

        logger.info("Request body logging", req.body);
        const book = new Book({
            name: req.body.name,
            author: req.body.author,
            language: req.body.language,
            createdBy: req.userId
        })
        let result = await book.save();
        logger.info("response data logger", result)
        res.json({ data: result })
    } catch (err) {
        next(err)
        //logger.error("Error Occured", err)
        //res.status(400).json({ err: err })
    }

}

const getBooks = async (req, res, next) => {
    try {
        let books = await Book.find({});
        res.json({ data: books });
        logger.info("response data logger", books);
    } catch (err) {
        next(err);
        //logger.error("Error Occured", err)
        //res.status(400).json({ err: err })
    }
}

const getBookById = async (req, res, next) => {
    try {

        logger.info("Book id is ", req.params.bookId);
        let book = await Book.findById(req.params.bookId);
        //let book = await Book.find({ _id: req.params.bookId });
        res.json({ data: book });
    } catch (err) {
        next(err)
        //logger.error("Error Occured", err)
        //res.status(400).json({ err: err })
    }
}


module.exports = {
    createBook,
    getBooks,
    getBookById
}