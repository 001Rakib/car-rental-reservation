import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TSignInUser, TUser } from "./user.interface";
import { User } from "./user.model";
import { createToken } from "../auth/auth.utils";
import config from "../../config";

const signUpUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const signInUser = async (payload: TSignInUser) => {
  //checking if the user is registered in the DB
  const userData = await User.isUserExistsByEmail(payload.email);

  if (!userData) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  //check if the password matched
  if (!(await User.isPasswordMatched(payload?.password, userData?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, "Wrong Password");
  }

  const data = await User.findOne({ email: payload.email });

  //create token and send to the client
  const jwtPayload = {
    email: userData?.email,
    role: userData?.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_token as string,
    config.jwt_access_expires_in as string
  );

  return {
    data,
    token: accessToken,
  };
};

export const userServices = {
  signUpUserIntoDB,
  signInUser,
};
