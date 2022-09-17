const { teapot } = require("./http");

module.exports = (req, res, next) => {
  return next(teapot());
};
