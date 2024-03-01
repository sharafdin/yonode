import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

// Hash the user's password before saving it to the database
UserSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (this.isModified("password")) {
    // Generate a salt and hash the password
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// Create and export the User model
const User = mongoose.model("User", UserSchema);
export default User;
