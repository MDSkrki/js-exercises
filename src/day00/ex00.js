/**
 * Write a function that returns the character recieved as a parameter
 * Extra: make sure it only returns if function recieves a character!
 */

const ft_putChar = (char) => {
  const length = char.length;
  if (length === 1) return char;
  return "Param is not char";
};

module.exports = ft_putChar;
