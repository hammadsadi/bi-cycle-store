/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUser } from './user.interface';
import { User } from './user.model';

// User Save To Database
const userSaveToDatabase = async (userInfo: TUser, file: any) => {
  if (file) {
    userInfo.image = file.path;
  }
  const user = await User.create(userInfo);

  return user;
};

export const UserServices = {
  userSaveToDatabase,
};
