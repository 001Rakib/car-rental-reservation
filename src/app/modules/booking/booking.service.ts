import { JwtPayload } from "jsonwebtoken";
import { User } from "../users/user.model";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import { Car } from "../car/car.model";

const getAllBookings = async () => {
  const result = await Booking.find().populate("user").populate("carId");
  return result;
};

const createBookingIntoDB = async (payload: TBooking, userInfo: JwtPayload) => {
  const user = await User.findOne({ email: userInfo?.email });

  if (user) {
    //set the logged in user Object id while booking a car
    payload.user = user?._id;
  }
  //update the car status to unavailable
  await Car.findByIdAndUpdate(
    payload.carId,
    { status: "unavailable" },
    { new: true }
  );
  const result = (
    await (await Booking.create(payload)).populate("user")
  ).populate("carId");
  return result;
};

const getMyBookings = async (userInfo: JwtPayload) => {
  const bookingUserData = await User.findOne({ email: userInfo?.email });

  const result = await Booking.find({ user: bookingUserData?._id })
    .populate("user")
    .populate("carId");

  return result;
};

export const bookingServices = {
  createBookingIntoDB,
  getMyBookings,
  getAllBookings,
};
