module.exports = {
  success: (message = "Response successful") => {
    return {
      statusCode: 200,
      message: message,
    };
  },

  error: (error) => {
    return {
      statusCode: 500,
      message: error,
    };
  },

  wrongPath: () => {
    return {
      statusCode: 404,
      message:
        "This is not the path you're looking for, young padawan. Please check again",
    };
  },

  teapot: () => {
    return {
      statusCode: 418,
      message:
        "It appears I am unable to process your request because I'm a teapot. Please ask a coffee pot to brew coffee",
    };
  },
};
