require("dotenv").config();
const express = require("express");
const { day00Router } = require("../day00/router");
const error404 = require("../middlewares/error404");
const responseHandler = require("../middlewares/responseHandler");
const healthCheck = require("./healthcheck");
const app = express();

// Middleware config
app.use(express.json());
app.use("/health", healthCheck);

app.use("/day00", day00Router);

// Fallback middlewares
app.use(error404);
app.use(responseHandler);

module.exports = app;
