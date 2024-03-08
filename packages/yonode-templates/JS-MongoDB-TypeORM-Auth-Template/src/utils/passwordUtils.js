import bcrypt from "bcrypt";

// Function to generate a hashed password asynchronously
export const hashPassword = async (password) => {
  // Generate a salt with a cost factor of 12
  const salt = await bcrypt.genSalt(12);
  // Hash the provided password using the generated salt
  const hashedPassword = await bcrypt.hash(password, salt);
  // Return the hashed password
  return hashedPassword;
};

// Function to compare a plain password with a hashed password asynchronously
export const comparePassword = async (password, hashedPassword) => {
  // Compare the provided password with the hashed password securely
  return await bcrypt.compare(password, hashedPassword);
};
