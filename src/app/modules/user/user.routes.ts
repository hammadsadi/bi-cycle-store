import express, { NextFunction, Request, Response } from 'express';
import requestValidation from '../../middlewares/requestValidation';
import { multerUpload } from '../../config/multer.config';
import { UserValidationSchemas } from './user.validation.schema';
import { UserControllers } from './user.controllers';

// Init Router
const userRouter = express.Router();
// Create User
userRouter.post(
  '/',
  multerUpload.single('image'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  requestValidation(UserValidationSchemas.createUserValidationSchema),
  UserControllers.createUser,
);


// Export User Router
export const UserRoutes = userRouter;
