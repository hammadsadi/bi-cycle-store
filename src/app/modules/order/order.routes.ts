import express from 'express';
import { orderControllers } from './order.controller';

// Init Router
const router = express.Router();

// Create Order
router.post('/', orderControllers.createOrder);
router.get('/revenue', orderControllers.orderRevenue);

// Export Bi-Cycle Router
export const orderRoutes = router;
