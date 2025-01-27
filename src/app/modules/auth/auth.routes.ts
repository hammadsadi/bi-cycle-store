import express from 'express';
import { AuthControllers } from './auth.controllers';

// Init Router
const authRouter = express.Router();
// Auth Login
authRouter.post('/login', AuthControllers.loginUser);

export const AuthRouter = authRouter;
