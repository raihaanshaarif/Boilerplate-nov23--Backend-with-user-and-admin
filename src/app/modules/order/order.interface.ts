import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';
import { ICow } from '../cow/cow.interface';

export type IOrder = {
  cow: Types.ObjectId | ICow;
  buyer: Types.ObjectId | IUser;
};
export type OrderModel = Model<ICow>;

export type ICowFilters = {
  searchTerm?: string;
};
