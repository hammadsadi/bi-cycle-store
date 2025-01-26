import express from 'express';

// Init Router
const authRouter = express.Router();
// Auth Login
authRouter.post('/login');

export const AuthRouter = authRouter;
