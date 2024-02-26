import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm";

@Entity()
export class EntityName {
  @ObjectIdColumn()
  id: ObjectId;

  @Column("string")
  firstName: string;

  @Column("string")
  lastName: string;
}
