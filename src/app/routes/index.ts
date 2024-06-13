import { Router } from "express";
import { UserRoutes } from "../modules/users/user.routes";
import { carRoutes } from "../modules/car/car.routes";
import { bookingRoutes } from "../modules/booking/booking.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/cars",
    route: carRoutes,
  },
  {
    path: "/bookings",
    route: bookingRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
