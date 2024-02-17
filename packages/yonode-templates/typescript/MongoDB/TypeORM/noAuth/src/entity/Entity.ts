import { Entity, Column, ObjectIdColumn, ObjectId } from "typeorm";

@Entity()
export class EntityName {
  @ObjectIdColumn()
  _id: ObjectId;
}
