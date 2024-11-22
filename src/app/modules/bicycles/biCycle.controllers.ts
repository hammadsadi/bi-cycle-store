import { Request, Response } from "express";
import { biCycleServices } from "./biCycle.services";

// Create Bi Cycle Controllers
const createBiCycle = async (req: Request, res: Response) => {
  try {
    const result = await biCycleServices.biCycleDataSaveToDatabase(req.body);
    res.status(200).json({
      message: "Bicycle Created Successful",
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: "Somethng Went Wrong",
      success: false,
      error: error,
    });
  }
};

// Export Controllers
export const biCycleControllers = {
  createBiCycle,
};
