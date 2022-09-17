const router = require("express").Router();
const { healthCheck } = require("./healthcheck");

// Common Healthcheck endpoint
router.get("/health", healthCheck);

module.exports = router;
