import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EntityName {
  @PrimaryGeneratedColumn()
  id: number;
}
