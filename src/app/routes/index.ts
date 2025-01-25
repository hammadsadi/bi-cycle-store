import { Router } from 'express';
import { BiCycleRoutes } from '../modules/bicycles/biCycle.routes';
import { UserRoutes } from '../modules/user/user.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/bicycle',
    route: BiCycleRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
