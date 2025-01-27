/* eslint-disable @typescript-eslint/no-explicit-any */

import config from '../../config';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import jwt from 'jsonwebtoken';

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
    userEmail: user?.email,
    role: user?.role,
  };
  const token = jwt.sign(jwtPayload, config.jwt_access_token_secret as string, {
    expiresIn: '10d',
  });

  return { token };
};

// Login User
const getLogedinUserFromDB = async (email: string) => {
  const user = await User.findOne({email})
  if (!user) {
    throw new AppError(400, 'User Not Found');
  }
  return user
};

export const AuthServices = {
  userLogin,
  getLogedinUserFromDB,
};
