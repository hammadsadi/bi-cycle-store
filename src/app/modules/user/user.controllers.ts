import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

// Create Bi Cycle Controllers
const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.userSaveToDatabase(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bicycle Created Successful',
    data: result,
  });
});

export const UserControllers = {
  createUser,
};
