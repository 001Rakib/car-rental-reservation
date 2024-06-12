import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const signUpUserIntoDB = async (payload: TUser) => {
  //check if the user is already exists
  const isUserExists = await User.find({ email: payload.email });
  if (isUserExists) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "User already exists! Please sign in"
    );
  }

  const result = await User.create(payload);
  return result;
};
export const userServices = {
  signUpUserIntoDB,
};
