/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: 'customer' | 'admin';
  image: string;
  phone?: string;
  address?: string;
  city?: string;
};

export interface UserModel extends Model<TUser> {
  isExistUserByEmail(email: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
