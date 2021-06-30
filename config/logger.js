const winston = require("winston");
const { ElasticsearchTransport } = require('winston-elasticsearch');


const esTransport = new ElasticsearchTransport({
    level: 'info',
    clientOpts: { node: "http://localhost:9200" }
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'mongodemo' },
    transports: [
        esTransport,
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.File({ filename: 'error.log', level: 'error' })
    ]
})

logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    }
}

logger.on("error", (error) => {
    console.log(`Error handling for logger${error}`);
})

module.exports = logger;