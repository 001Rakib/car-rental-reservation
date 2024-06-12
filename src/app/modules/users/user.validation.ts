import { z } from "zod";

const signUpUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    role: z.enum(["user", "admin"]),
    password: z.string().min(6), // Ensure password has at least 8 characters
    phone: z.string(),
    address: z.string(),
  }),
});
export const userValidationSchema = {
  signUpUserValidationSchema,
};
