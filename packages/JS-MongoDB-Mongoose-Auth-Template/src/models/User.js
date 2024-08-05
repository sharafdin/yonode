// Import required modules and configuration
import mongoose from "mongoose";

// Define a schema for the user with email and password fields
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, // Makes this field mandatory
    unique: true, // Ensures email addresses are unique in the database
  },
  password: {
    type: String,
    required: true, // Makes this field mandatory
  },
});

// Create and export the User model
const User = mongoose.model("User", UserSchema);
export default User;
