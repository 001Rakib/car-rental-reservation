import { z } from "zod";

const signUpUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    role: z.enum(["user", "admin"]).optional(),
    password: z.string(),
    address: z.string().optional(),
    phone: z.number().optional(),
  }),
});
export const userValidationSchema = {
  signUpUserValidationSchema,
};
