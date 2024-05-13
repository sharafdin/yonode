
export const helloWorld = async (res, req) => {
    try {
        // Send a simple string as a response
        res.send("Hello World!")
    } catch (err) {
        // If there's an error, send a response with a 500 status code
        // and an error message
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
