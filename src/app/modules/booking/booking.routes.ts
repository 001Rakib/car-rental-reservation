import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { bookingValidationSchema } from "./booking.validation";
import { bookingControllers } from "./booking.controller";
import auth from "../../middleware/auth";

const router = Router();

router.post(
  "/",
  auth("user"),
  validateRequest(bookingValidationSchema.createBookingValidationSchema),
  bookingControllers.createBooking
);

router.get("/", auth("admin"), bookingControllers.getAllBookings);
router.get("/my-bookings", auth("user"), bookingControllers.getMyBookings);

export const bookingRoutes = router;
