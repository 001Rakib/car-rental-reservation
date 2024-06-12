import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { carValidationSchema } from "./car.validation";
import { carControllers } from "./car.controller";

const router = Router();
router.post(
  "/",
  validateRequest(carValidationSchema.createCarValidationSchema),
  carControllers.createCar
);

export const carRoutes = router;
