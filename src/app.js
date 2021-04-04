require('dotenv').config();
const express = require('express');

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

app.use(express.json());
app.use(require("./routes"));

app.listen(APP_PORT, () => {
    console.log(`Setup [ON]: ${APP_URL}:${APP_PORT}`);
});

module.exports = app;