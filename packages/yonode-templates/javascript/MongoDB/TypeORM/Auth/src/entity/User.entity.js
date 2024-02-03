// Use ESM import syntax
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
    name: {
      type: "varchar",
      nullable: false,
    },
    email: {
      type: "varchar",
      unique: true,
      nullable: false,
    },
    username: {
      type: "varchar",
      unique: true,
      nullable: false,
    },
    password: {
      type: "varchar",
      nullable: false,
    },
    isEmailConfirmed: {
      type: "boolean",
      default: false,
      nullable: false,
    },
    token: {
      type: "varchar",
      nullable: true,
    },
    expireDate: {
      type: "timestamp",
      nullable: true,
    },
    createdAt: {
      name: "created_at",
      type: "timestamp",
      createDate: true,
    },
    updatedAt: {
      name: "updated_at",
      type: "timestamp",
      updateDate: true,
    },
  },
});

// Use ESM export syntax
export default User;
