import { Router } from 'express';
import { BiCycleRoutes } from '../modules/bicycles/biCycle.routes';
import { UserRoutes } from '../modules/user/user.routes';
import { AuthRouter } from '../modules/auth/auth.routes';

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
  {
    path: '/auth',
    route: AuthRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
