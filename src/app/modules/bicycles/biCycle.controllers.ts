import { biCycleServices } from './biCycle.services';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

// Create Bi Cycle Controllers
const createBiCycle = catchAsync(async (req, res) => {
  const result = await biCycleServices.biCycleDataSaveToDatabase(
    req.body,
    req?.file,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bicycle Created Successful',
    data: result,
  });
});

// Get All Bi Cycle Controller
const allBiCycle = catchAsync(async (req, res) => {
  const result = await biCycleServices.getAllbiCycleDataFromDatabase(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bicycle retrieved successfully',
    data: result,
  });
});

// Get Single Bi Cycle
const singleBiCycle = catchAsync(async (req, res) => {
  const result = await biCycleServices.getSinglebiCycleDataFromDatabase(
    req.params.productId,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bicycle retrieved successfully',
    data: result,
  });
});

// Update Single Bi Cycle
const updateSingleBiCycle = catchAsync(async (req, res) => {
  const result = await biCycleServices.singlebiCycleDataUpdateFromDatabase(
    req.params.productId,
    req.body,
    req.file,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bicycle updated successfully',
    data: result,
  });
});

// Delete Single Bi Cycle Controller

const deleteSingleBiCycle = catchAsync(async (req, res) => {
  const result = await biCycleServices.singlebiCycleDataDeleteFromDatabase(
    req.params.productId,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bicycle deleted successfully',
    data: result,
  });
});

// Export Controllers
export const biCycleControllers = {
  createBiCycle,
  allBiCycle,
  singleBiCycle,
  updateSingleBiCycle,
  deleteSingleBiCycle,
};
