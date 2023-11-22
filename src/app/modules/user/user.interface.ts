import { Model } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  phoneNumber: string;
  role: 'buyer' | 'seller';
  password: string;
  name: UserName;
  address: string;
  budget: number;
  income?: number;
};

export type UserModel = Model<IUser>;

export type IUserFilters = {
  searchTerm?: string;
  role?: string;
  email?: string;
  phoneNumber?: string;
};
