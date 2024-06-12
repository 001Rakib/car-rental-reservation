import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";

const userSchema = new Schema<TUser, UserModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true, enum: ["user", "admin"] },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.isUserExistsId = async function (id: string) {
  return await User.findById(id);
};

export const User = model<TUser, UserModel>("User", userSchema);
