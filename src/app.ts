import express, { Application } from 'express';
import cors from 'cors';
import { biCycleRoutes } from './app/modules/bicycles/biCycle.routes';
import { orderRoutes } from './app/modules/order/order.routes';
const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Application Routes
app.use('/api/products', biCycleRoutes);
app.use('/api/orders', orderRoutes);

export default app;
