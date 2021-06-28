const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser")
const bookRouter = require("./routes/book.route");

// parse application/x - www - form - urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const MONGO_URL = 'mongodb://localhost:27017/book'

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).
    catch(error => console.log(error));

const PORT = 4000

app.use("/books", bookRouter);

app.listen(PORT, () => {
    console.log("It is running");
})