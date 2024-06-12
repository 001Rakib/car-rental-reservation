import { Router } from "express";
import { UserRoutes } from "../modules/users/user.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/",
    route: UserRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
