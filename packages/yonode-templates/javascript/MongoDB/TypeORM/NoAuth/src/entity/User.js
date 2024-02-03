import { EntitySchema } from "typeorm";

const schemaName = new EntitySchema({
  name: "schemaName", // Will use table name `category` as default behaviour.
  tableName: "tableName", // Optional: Provide `tableName` property to override the default behaviour for table name.
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
  },
});
export default schemaName;
