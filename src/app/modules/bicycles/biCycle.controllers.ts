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
   
    const result = await biCycleServices.getAllbiCycleDataFromDatabase(
      req.query.searchTerm,
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

// Get Single Bi Cycle 
const singleBiCycle = async (req: Request, res: Response) => {
  try {
    const result = await biCycleServices.getSinglebiCycleDataFromDatabase(
      req.params.productId,
    );

    // Check Data
    if (!result) {
      res.status(404).json({
        error: 'Not Found!',
        message: 'Bicycle Not Found with provided ID',
        status: false,
        data: result,
      });
    } else {
      res.status(200).json({
        message: 'Bicycle retrieved successfully',
        status: true,
        data: result,
      });
    }
    console.log(result);
  } catch (error) {
    res.status(400).json({
      message: 'Somethng Went Wrong',
      status: false,
      error: error,
    });
  }
};

// Update Single Bi Cycle
const updateSingleBiCycle = async (req: Request, res: Response) => {
  try {
    const result = await biCycleServices.singlebiCycleDataUpdateFromDatabase(
      req.params.productId,
      req.body,
    );
    // Check Data
    if (!result) {
      res.status(404).json({
        error: 'Not Found',
        message: 'Bicycle Not Found With Provided ID',
        status: false,
        data: result,
      });
    } else {
      res.status(200).json({
        message: 'Bicycle updated successfully',
        status: true,
        data: result,
      });
    }
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
    const result = await biCycleServices.singlebiCycleDataDeleteFromDatabase(
      req.params.productId,
    );
    // Check Result
    if (!result) {
      res.status(404).json({
        error: 'Not Found',
        message: 'Bicycle Not Found with Provided ID',
        status: false,
      });
    } else {
      res.status(200).json({
        message: 'Bicycle deleted successfully',
        status: true,
        data: {},
      });
    }
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
