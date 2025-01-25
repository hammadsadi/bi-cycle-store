import express, { NextFunction, Request, Response } from 'express';
import requestValidation from '../../middlewares/requestValidation';
import { multerUpload } from '../../config/multer.config';
import { UserValidationSchemas } from './user.validation.schema';
import { UserControllers } from './user.controllers';

// Init Router
const userRouter = express.Router();
// Create BiCycle
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

// Get Single BiCycle
// Update Single BiCycle
// router.put('/:productId', biCycleControllers.updateSingleBiCycle);
// router.put(
//   '/:productId',
//   multerUpload.single('image'),
//   (req: Request, res: Response, next: NextFunction) => {
//     req.body = JSON.parse(req.body.data);
//     next();
//   },
//   requestValidation(BicycleValidationSchemas.updateBicycleValidationSchema),
//   biCycleControllers.updateSingleBiCycle,
// );

// Export Bi-Cycle Router
export const UserRoutes = userRouter;
