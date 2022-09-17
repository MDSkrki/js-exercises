const { ex00 } = require("./ex00");

const router = require("express").Router();

router.post("/ex00", ex00);

module.exports.day00Router = router;
