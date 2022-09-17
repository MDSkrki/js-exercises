const { ft_putChar } = require("../../src/day00/ex00");

describe("Tests for day00 ex00", () => {
  it("Should return char", () => {
    // Arrange
    const char = "C";
    // Act
    const returnedChar = ft_putChar(char);
    // Assert
    expect(returnedChar).toBe(char);
    expect(returnedChar).toHaveLength(1);
  });

  it("Should throw error when param is not char", () => {
    // Arrange
    const param = "string";
    // Act
    const data = ft_putChar(param);
    // Assert
    expect(data).not.toBe(param);
    expect(data).not.toHaveLength(1);
  });

  it("Should throw error when param is not string", () => {
    // Arrange
    const param = ["2"];
    // Act
    const data = ft_putChar(param);
    // Assert
    expect(data).not.toBe(param);
    expect(data).not.toHaveLength(1);
  });
});
