import express, { Application } from "express";
import cors from "cors";
import { biCycleRoutes } from "./app/modules/bicycles/biCycle.routes";
const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Application Routes
app.use("/api/products", biCycleRoutes);

export default app;
