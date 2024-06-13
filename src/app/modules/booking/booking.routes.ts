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

export const bookingRoutes = router;
