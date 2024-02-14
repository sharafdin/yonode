import { EntitySchema } from "typeorm";

const schemaName = new EntitySchema({
  name: "schemaName",
  tableName: "tableName",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
  },
});
export default schemaName;
