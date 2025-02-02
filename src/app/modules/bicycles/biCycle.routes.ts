import express from 'express';
import { biCycleControllers } from './biCycle.controllers';
import requestValidation from '../../middlewares/requestValidation';
import { BicycleValidationSchemas } from './bicycle.validation.schemas';
// import auth from '../../middlewares/authChecking';

// Init Router
const router = express.Router();
// Create BiCycle
router.post(
  '/',

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
router.put(
  '/:productId',
  requestValidation(BicycleValidationSchemas.updateBicycleValidationSchema),
  biCycleControllers.updateSingleBiCycle,
);
// Delete Single BiCycle
router.delete('/:productId', biCycleControllers.deleteSingleBiCycle);

// Export Bi-Cycle Router
export const BiCycleRoutes = router;
