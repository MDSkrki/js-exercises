const { wrongPath } = require("../config/http");

module.exports = (req, res, next) => {
  next(wrongPath());
};
