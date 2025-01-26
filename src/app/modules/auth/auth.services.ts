/* eslint-disable @typescript-eslint/no-explicit-any */

import config from '../../config';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';

// Login User
const userLogin = async (userInfo: TLoginUser) => {
  const user = await User.isExistUserByEmail(userInfo.email);
  if (!user) {
    throw new AppError(400, 'Invalid Credentials!');
  }
  if (!(await User.isPasswordMatched(userInfo.password, user.password))) {
    throw new AppError(400, 'Invalid Credentials!');
  }

  //create token and sent to the  client

  const jwtPayload = {
    userEmail: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_token_secret as string,
    config.jwt_access_expires_in as string,
  );
  return accessToken;
};

export const AuthServices = {
  userLogin,
};
