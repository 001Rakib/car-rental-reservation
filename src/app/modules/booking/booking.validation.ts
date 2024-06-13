import { z } from "zod";

const createBookingValidationSchema = z.object({
  body: z.object({
    carId: z.string(),
    date: z.string(),
    startTime: z.string(),
  }),
});
export const bookingValidationSchema = {
  createBookingValidationSchema,
};
