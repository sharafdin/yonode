import { EntitySchema } from "typeorm";

const SchemaName = new EntitySchema({
  name: "SchemaName",
  tableName: "tableName",
  columns: {
    _id: {
      primary: true,
      type: "mongodb-object-id",
      objectId: true,
    },
  },
});
export default SchemaName;
