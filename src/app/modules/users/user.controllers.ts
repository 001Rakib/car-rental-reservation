import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.service";
import httpStatus from "http-status";

const signUpUser = catchAsync(async (req, res) => {
  const result = await userServices.signUpUserIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User registered successfully",
    data: result,
  });
});
const signInUser = catchAsync(async (req, res) => {
  const result = await userServices.signInUser(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User logged in successfully",
    data: result,
  });
});
export const userControllers = {
  signUpUser,
  signInUser,
};
