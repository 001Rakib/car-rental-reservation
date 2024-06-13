import { JwtPayload } from "jsonwebtoken";
import { User } from "../users/user.model";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const createBookingIntoDB = async (payload: TBooking, userInfo: JwtPayload) => {
  const user = await User.findOne({ email: userInfo?.email });

  if (user) {
    //set the logged in user Object id while booking a car
    payload.user = user?._id;
  }

  const result = (
    await (await Booking.create(payload)).populate("user")
  ).populate("carId");
  return result;
};
export const bookingServices = {
  createBookingIntoDB,
};
