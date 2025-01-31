import express from 'express';
import requestValidation from '../../middlewares/requestValidation';
import { UserValidationSchemas } from './user.validation.schema';
import { UserControllers } from './user.controllers';

// Init Router
const userRouter = express.Router();
// Create User
userRouter.post(
  '/',
  requestValidation(UserValidationSchemas.createUserValidationSchema),
  UserControllers.createUser,
);

// Export User Router
export const UserRoutes = userRouter;
