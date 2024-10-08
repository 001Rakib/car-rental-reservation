/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

const userSchema = new Schema<TUser, UserModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin"],
      default: "user",
    },
    password: { type: String, required: true, select: 0 },
    address: { type: String },
    phone: { type: Number },
  },
  {
    timestamps: true,
  }
);

//pre-save middleware
//hash the password before saving into the database
userSchema.pre("save", async function (next) {
  const user = this;
  //hashing password with bcrypt and save password into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_round_salt)
  );
  next();
});
//set '' after saving password
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email: email }).select("+password");
};

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword: string,
  hashedPassword: string
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const User = model<TUser, UserModel>("User", userSchema);
