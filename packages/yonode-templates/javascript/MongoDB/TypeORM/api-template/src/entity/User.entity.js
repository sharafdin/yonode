import {
  Entity,
  ObjectIdColumn,
  Column,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { IsEmail, Matches } from "class-validator";
import bcrypt from "bcrypt";

@Entity()
export class User {
  @ObjectIdColumn()
  id;

  @Column()
  name;

  @Column({
    unique: true,
  })
  @Matches(/^[a-zA-Z0-9_.-]*$/, {
    message: "username should not contain special characters except _. and -",
  })
  username;

  @Column({
    select: false,
  })
  password;

  @Column({
    unique: true,
  })
  @IsEmail({}, { message: "Invalid email" })
  email;

  @CreateDateColumn()
  createdAt;

  @UpdateDateColumn()
  updatedAt;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt) {
    return await bcrypt.compare(attempt, this.password);
  }
}
