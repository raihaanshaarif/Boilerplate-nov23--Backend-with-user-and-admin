import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/carchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { usersService } from './user.service';
import pick from '../../../shared/pick';
import { userFilterableFields, userSearchableFields } from './user.constant';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...userData } = req.body;
    const result = await usersService.createUser(userData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Created Successfully',
      data: result,
    });
  },
);
const getUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, userFilterableFields);
    const paginationOptions = pick(req.query, userSearchableFields);
    const result = await usersService.getUser(filters, paginationOptions);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Retrived Successfully',
      data: result,
    });
  },
);

const geSingleUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await usersService.geSingleUser(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Retrived Successfully',
      data: result,
    });
  },
);
const updateUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    const result = await usersService.updateUser(id, body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Updated Successfully',
      data: result,
    });
  },
);
const deleteUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await usersService.deleteUser(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Deleted Successfully',
      data: result,
    });
  },
);

export const UserController = {
  createUser,
  getUser,
  geSingleUser,
  updateUser,
  deleteUser,
};
