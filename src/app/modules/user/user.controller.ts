import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/carchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { usersService } from './user.service';

const createAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { admin, ...adminData } = req.body;
    const result = await usersService.createAdmin(admin, adminData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Created Successfully',
      data: result,
    });
  },
);

export const UserController = {
  createAdmin,
};
