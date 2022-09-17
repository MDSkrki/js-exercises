/**
 * Write a function that returns the character recieved as a parameter
 * Extra: make sure it only returns if function recieves a character!
 */

const ft_putChar = (char) => {
  const length = char.length;
  if (length === 1) return char;
  return "Param is not char";
};

// Controller middleware for the express server to execute
const ex00 = (req, res) => {
  /**
   *  @param {"char": string}
   */
  const char = req.body.char;
  const data = ft_putChar(char);
  return res.json(ft_putChar(data));
};

module.exports = { ft_putChar, ex00 };
