require("dotenv").config();
const express = require("express");
const app = express();

// Middleware config
app.use(express.json());

module.exports = app;
