import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { userValidationSchema } from "./user.validation";
import { userControllers } from "./user.controllers";

const router = Router();

router.post(
  "/signup",
  validateRequest(userValidationSchema.signUpUserValidationSchema),
  userControllers.signUpUser
);

export const UserRoutes = router;
