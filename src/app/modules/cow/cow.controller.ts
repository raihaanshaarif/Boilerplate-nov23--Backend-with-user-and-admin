import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/carchAsync';
import { CowService } from './cow.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { cowFilterableFields, cowSearchableFields } from './cow.conostant';

const createCow: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...userData } = req.body;
    const result = await CowService.createCow(userData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow Created Successfully',
      data: result,
    });
  },
);

const getCow: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, cowFilterableFields);
    const paginationOptions = pick(req.query, cowSearchableFields);
    const result = await CowService.getCow(filters, paginationOptions);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow Retrived Successfully',
      data: result,
    });
  },
);
const geSingleCow: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await CowService.geSingleCow(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow Retrived Successfully',
      data: result,
    });
  },
);

const updateCow: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    const result = await CowService.updateCow(id, body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow Updated Successfully',
      data: result,
    });
  },
);
const deleteCow: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await CowService.deleteCow(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow Deleted Successfully',
      data: result,
    });
  },
);

export const CowController = {
  createCow,
  getCow,
  geSingleCow,
  updateCow,
  deleteCow,
};
