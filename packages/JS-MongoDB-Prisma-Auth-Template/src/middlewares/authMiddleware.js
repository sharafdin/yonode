import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/initialConfig.js";

// Middleware to validate JWT tokens
export default function auth(req, res, next) {
  // Extract the token from the Authorization header
  const token = req.header("Authorization").replace("Bearer ", "");

  // Deny access if the token is not provided
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.userId; // Attach the user ID to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    // Respond with an error if the token is invalid
    res.status(401).json({ message: "Token is not valid" });
  }
}
