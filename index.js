const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser")
const bookRouter = require("./routes/book.route");
const userRouter = require("./routes/user.route");
const { authMiddleware } = require("./controllers/authMiddleware");
const morgan = require("morgan");
const logger = require("./config/logger");
const helmet = require("helmet");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');
const cors = require("cors");
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Verizon Book App',
            version: '1.0.0',
            desciption: "This is simple CRUD BOOK api",
            license: {
                name: "MIT"
            }
        }
    },
    apis: ['./routes/*.js'],
};

const openapiSpecification = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));


app.use(helmet());

app.use(cors());

// parse application/x - www - form - urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json

app.use(express.static("public"));
app.use(bodyParser.json())


app.use(morgan('common', { stream: logger.stream }));


const MONGO_URL = 'mongodb://localhost:27017/book'

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).
    catch(error => console.log(error));

const PORT = 4000

app.use("/books", bookRouter);
app.use("/user", userRouter);
//error handler
app.use((err, req, res, next) => {
    console.log("--------------------------")
    console.log(err);
    res.status(400).json({ errMsg: err.message })
})

app.listen(PORT, () => {
    console.log("It is running");
})

module.exports = app;