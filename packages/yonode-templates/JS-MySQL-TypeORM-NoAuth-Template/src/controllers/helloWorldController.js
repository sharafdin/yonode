/**
 * A simple controller function to handle requests to the '/' route
 * @param {object} req The request object
 * @param {object} res The response object
 * @returns {object} The response object
 */
export const helloWorld = async (req, res) => {
  try {
    // Send a response to the client
    res.send("Hello world!");
  } catch (err) {
    // If there is an error, send a 500 error with a JSON response
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

