module.exports = ({ statusCode, message }, req, res, next) => {
  return res.status(statusCode).json({ message });
};
