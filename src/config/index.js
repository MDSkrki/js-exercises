require("dotenv").config();
const express = require("express");
const { day00Router } = require("../day00/router");
const healthCheck = require("./healthcheck");
const app = express();

// Middleware config
app.use(express.json());
app.use("/health", healthCheck);

app.use("/day00", day00Router);

module.exports = app;
