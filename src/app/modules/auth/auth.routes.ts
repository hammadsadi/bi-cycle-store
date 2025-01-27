import express from 'express';
import { AuthControllers } from './auth.controllers';
import auth from '../../middlewares/authChecking';

// Init Router
const authRouter = express.Router();
// Auth Login
authRouter.post('/login', AuthControllers.loginUser);
authRouter.get('/logout', AuthControllers.logoutUser);
authRouter.get('/me', auth('admin', 'customer'), AuthControllers.getMe);

export const AuthRouter = authRouter;
