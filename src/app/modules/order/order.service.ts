import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';
import { IOrder } from './order.interface';
import { Cow } from '../cow/cow.model';
import mongoose from 'mongoose';
import { Order } from './order.model';

const createOrder = async (payload: IOrder) => {
  const buyer = await User.findById(payload.buyer);
  if (!buyer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'buyer not found');
  }
  const cow = await Cow.findById(payload.cow);
  if (!cow) {
    throw new ApiError(httpStatus.NOT_FOUND, 'cow not found');
  }

  if (buyer.budget < cow.price) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Not enough money to buy');
  }
  let newOrder = null;
  // Start Transaction
  const session = await mongoose.startSession();
  try {
    await session.startTransaction();
    const seller = await User.findById(cow.seller).session(session);
    if (!seller) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Seller not found');
    }
    cow.label = 'sold out';

    seller.income = seller.income + cow.price;
    buyer.budget = buyer.budget - cow.price;

    const newCow = await Cow.findByIdAndUpdate({ _id: cow._id }, cow).session(
      session,
    );
    if (!newCow) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Cow not found');
    }

    const newBuyer = await User.findByIdAndUpdate(buyer.id, buyer).session(
      session,
    );
    if (!newBuyer) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Buyer not found');
    }
    const newSeller = await User.findByIdAndUpdate(seller._id, seller).session(
      session,
    );
    if (!newSeller) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Seller not found');
    }

    newOrder = (await (await Order.create(payload)).populate('cow')).populate(
      'buyer',
    );

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
  return newOrder;
};

const getAllOrders = async () => {
  const result = await Order.find();
  return result;
};

export const OrderService = {
  createOrder,
  getAllOrders,
};
