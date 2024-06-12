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

router.get("/", carControllers.getAllCar);
router.get("/:id", carControllers.getSingleCar);

export const carRoutes = router;
