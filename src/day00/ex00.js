/**
 * Write a function that returns the character recieved as a parameter
 * Extra: make sure it only returns if function recieves a character!
 */

const { success } = require("../config/http");

const ft_putChar = (char) => {
  if (typeof char === "string") {
    const regex = /[a-z]/gi;
    const test = regex.test(char);
    if (test) {
      const length = char.length;
      if (length === 1) return char;
    }
  }

  return "Param is not char";
};

// Controller middleware for the express server to execute
const ex00 = (req, res, next) => {
  /**
   *  @param {"char": string}
   */
  const char = req.body.char;
  const data = ft_putChar(char);
  return next(success(data));
};

module.exports = { ft_putChar, ex00 };
