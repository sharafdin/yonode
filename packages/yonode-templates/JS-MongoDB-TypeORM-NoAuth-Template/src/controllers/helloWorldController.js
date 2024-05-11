/**
 * Hello World controller
 * 
 * This is a simple controller that returns a "Hello World" message
 * in the response body. It is a good example of how to create a basic
 * controller in Yonode.
 * 
 * @param {Object} res The Express.js response object
 * @param {Object} req The Express.js request object
 */
export const helloWorld = async (res, req) => {
    try {

        // Send a "Hello World" message in the response body
        res.send("Hello World");

    } catch (err) {
        // If there is an error, send a 500 Internal Server Error
        // with a message in the response body
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

