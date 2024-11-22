import express from "express";
import { biCycleControllers } from "./biCycle.controllers";

// Init Router
const router = express.Router();
// Create BiCycle
router.post("/", biCycleControllers.createBiCycle);
export const biCycleRoutes = router;
