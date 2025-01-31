/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUser } from './user.interface';
import { User } from './user.model';

// User Save To Database
const userSaveToDatabase = async (userInfo: TUser) => {
  const user = await User.create(userInfo);

  return user;
};

export const UserServices = {
  userSaveToDatabase,
};
