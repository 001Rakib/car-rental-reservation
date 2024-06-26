import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { userValidationSchema } from "./user.validation";
import { userControllers } from "./user.controllers";
import { authValidation } from "../auth/auth.validation";

const router = Router();

router.post(
  "/signup",
  validateRequest(userValidationSchema.signUpUserValidationSchema),
  userControllers.signUpUser
);
router.post("/signin", userControllers.signInUser);
router.post(
  "/refresh-token",
  validateRequest(authValidation.refreshTokenValidationSchema),
  userControllers.refreshToken
);

export const UserRoutes = router;
