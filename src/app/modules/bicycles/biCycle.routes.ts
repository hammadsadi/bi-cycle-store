import express, { NextFunction, Request, Response } from 'express';
import { biCycleControllers } from './biCycle.controllers';
import requestValidation from '../../middlewares/requestValidation';
import { BicycleValidationSchemas } from './bicycle.validation.schemas';
import { multerUpload } from '../../config/multer.config';
import auth from '../../middlewares/authChecking';

// Init Router
const router = express.Router();
// Create BiCycle
router.post(
  '/',
  multerUpload.single('image'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  requestValidation(BicycleValidationSchemas.createBicycleValidationSchema),
  biCycleControllers.createBiCycle,
);
//Get All BiCycle
router.get('/', auth('customer'), biCycleControllers.allBiCycle);
// Get Single BiCycle
router.get('/:productId', biCycleControllers.singleBiCycle);
// Update Single BiCycle
// router.put('/:productId', biCycleControllers.updateSingleBiCycle);
router.put(
  '/:productId',
  multerUpload.single('image'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  requestValidation(BicycleValidationSchemas.updateBicycleValidationSchema),
  biCycleControllers.updateSingleBiCycle,
);
// Delete Single BiCycle
router.delete('/:productId', biCycleControllers.deleteSingleBiCycle);

// Export Bi-Cycle Router
export const BiCycleRoutes = router;
