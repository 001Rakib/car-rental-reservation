import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { bookingServices } from "./booking.service";
import sendResponse from "../../utils/sendResponse";

const getAllBookings = catchAsync(async (req, res) => {
  const result = await bookingServices.getAllBookings();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Bookings retrieved successfully",
    data: result,
  });
});
const createBooking = catchAsync(async (req, res) => {
  const result = await bookingServices.createBookingIntoDB(req.body, req.user);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Car booked successfully",
    data: result,
  });
});
const getMyBookings = catchAsync(async (req, res) => {
  const result = await bookingServices.getMyBookings(req.user);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "My Bookings retrieved successfully",
    data: result,
  });
});

export const bookingControllers = {
  createBooking,
  getMyBookings,
  getAllBookings,
};
