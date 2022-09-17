const { HEALTH_MESSAGE } = require("../constants");

const healthCheck = (req, res) => {
  res.status(200).json({ health: HEALTH_MESSAGE });
};

module.exports = healthCheck;