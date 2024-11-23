import express from 'express';
import { biCycleControllers } from './biCycle.controllers';

// Init Router
const router = express.Router();
// Create BiCycle
router.post('/', biCycleControllers.createBiCycle);
//Get All BiCycle
router.get('/', biCycleControllers.allBiCycle);
// Get Single BiCycle
router.get('/:productId', biCycleControllers.singleBiCycle);
// Update Single BiCycle
router.put('/:productId', biCycleControllers.updateSingleBiCycle);
// Delete Single BiCycle
router.delete('/:productId', biCycleControllers.deleteSingleBiCycle);

// Export Bi-Cycle Router
export const biCycleRoutes = router;
