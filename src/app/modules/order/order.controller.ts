import { Request, RequestHandler, Response } from 'express';
import { OrderService } from './order.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/carchAsync';

const createOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const order = req.body;
    const result = await OrderService.createOrder(order);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Orders created successfully',
      data: result,
    });
  },
);

const getAllOrders: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await OrderService.getAllOrders();
    return result;

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow Retrived Successfully',
      data: result,
    });
  },
);

export const OrderCOntroller = {
  createOrder,
  getAllOrders,
};
