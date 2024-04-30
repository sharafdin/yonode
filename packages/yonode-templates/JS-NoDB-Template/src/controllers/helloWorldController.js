export const helloWorld = async (req, res) => {
  try {
    res.send("Hello World!");
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
