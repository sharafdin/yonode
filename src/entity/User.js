// Import required modules and configuration
import { EntitySchema } from "typeorm";

// Define a schema for the user with email and password fields
const User = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    _id: {
      primary: true,
      type: "mongodb-object-id",
      objectId: true,
    },
    email: {
      type: "string",
      required: true, // Makes this field mandatory
      unique: true, // Ensures email addresses are unique in the database
    },
    password: {
      type: "string",
      required: true, // Makes this field mandatory
    },
  },
});
export default User;
