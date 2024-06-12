import { Model } from "mongoose";

export type TUser = {
  name: string;
  email: string;
  role: "user" | "admin";
  password: string;
  phone: string;
  address: string;
};
export interface UserModel extends Model<TUser> {
  isUserExistsId(id: string): Promise<TUser>;
}
