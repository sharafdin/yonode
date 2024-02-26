import mongoose from "mongoose";

interface typeName {}

const { Schema, model } = mongoose;

const userSchema = new Schema<typeName>({
  name: String,
});

const User = model<typeName>("User", userSchema);

export default User;
