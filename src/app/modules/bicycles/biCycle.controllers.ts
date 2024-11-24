import { Request, Response } from 'express';
import { biCycleServices } from './biCycle.services';

// Create Bi Cycle Controllers
const createBiCycle = async (req: Request, res: Response) => {
  try {
    const result = await biCycleServices.biCycleDataSaveToDatabase(req.body);
    res.status(200).json({
      message: 'Bicycle Created Successful',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error._message,
      status: false,
      error: error,
      stack: error.stack,
    });
  }
};

// Get All Bi Cycle Controller
const allBiCycle = async (req: Request, res: Response) => {
  try {
    const result = await biCycleServices.getAllbiCycleDataFromDatabase();
    res.status(200).json({
      message: 'Bicycle retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Somethng Went Wrong',
      status: false,
      error: error,
    });
  }
};

// Get Single Bi Cycle Controller
const singleBiCycle = async (req: Request, res: Response) => {
  try {
    const result = await biCycleServices.getSinglebiCycleDataFromDatabase(
      req.params.productId,
    );
    res.status(200).json({
      message: 'Bicycle retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Somethng Went Wrong',
      status: false,
      error: error,
    });
  }
};

// Get Single Bi Cycle Controller
const updateSingleBiCycle = async (req: Request, res: Response) => {
  try {
    const result = await biCycleServices.singlebiCycleDataUpdateFromDatabase(
      req.params.productId,
      req.body,
    );
    res.status(200).json({
      message: 'Bicycle updated successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Somethng Went Wrong',
      status: false,
      error: error,
    });
  }
};

// Delete Single Bi Cycle Controller
const deleteSingleBiCycle = async (req: Request, res: Response) => {
  try {
    await biCycleServices.singlebiCycleDataDeleteFromDatabase(
      req.params.productId,
    );
    res.status(200).json({
      message: 'Bicycle deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    res.status(400).json({
      message: 'Somethng Went Wrong',
      status: false,
      error: error,
    });
  }
};

// Export Controllers
export const biCycleControllers = {
  createBiCycle,
  allBiCycle,
  singleBiCycle,
  updateSingleBiCycle,
  deleteSingleBiCycle,
};
