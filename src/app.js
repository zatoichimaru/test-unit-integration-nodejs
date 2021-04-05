require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const {
    APP_URL,
    APP_PORT,
    DB_DATABASE,
    DB_HOSTNAME,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD
} = process.env;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(require("./routes"));

app.listen(APP_PORT, () => {
    console.log(`Setup [ON]: ${APP_URL}:${APP_PORT}`);
});

module.exports = app;