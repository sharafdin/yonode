import { EntitySchema } from "typeorm";

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
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },
});
export default User;
