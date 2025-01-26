import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

// Create Bi Cycle Controllers
const loginUser = catchAsync(async (req, res) => {
  //   const result = await UserServices.userSaveToDatabase(req.body, req?.file);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Login Successful',
    data: 'result',
  });
});

export const UserControllers = {
  loginUser,
};
