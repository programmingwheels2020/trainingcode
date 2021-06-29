const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    author: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    language: { type: String, required: true },
    createdBy: { type: mongoose.SchemaTypes.ObjectId }
})

module.exports = mongoose.model("Book", bookSchema);