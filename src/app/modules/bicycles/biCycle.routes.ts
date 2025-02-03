import express from 'express';
import { biCycleControllers } from './biCycle.controllers';
import requestValidation from '../../middlewares/requestValidation';
import { BicycleValidationSchemas } from './bicycle.validation.schemas';
import auth from '../../middlewares/authChecking';
// import auth from '../../middlewares/authChecking';

// Init Router
const router = express.Router();
// Create BiCycle
router.post(
  '/',
  auth('admin'),
  requestValidation(BicycleValidationSchemas.createBicycleValidationSchema),
  biCycleControllers.createBiCycle,
);
//Get All BiCycle
router.get('/', biCycleControllers.allBiCycle);
router.get('/specific', biCycleControllers.getSpecificField);
// Get Single BiCycle
router.get('/:productId', biCycleControllers.singleBiCycle);
// Update Single BiCycle
// router.put('/:productId', biCycleControllers.updateSingleBiCycle);
router.patch(
  '/:productId',
  auth('admin'),
  requestValidation(BicycleValidationSchemas.updateBicycleValidationSchema),
  biCycleControllers.updateSingleBiCycle,
);
// Delete Single BiCycle
router.delete(
  '/:productId',
  auth('admin'),
  biCycleControllers.deleteSingleBiCycle,
);

// Export Bi-Cycle Router
export const BiCycleRoutes = router;
