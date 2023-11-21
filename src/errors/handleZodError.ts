import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorResponse } from '../app/interfaces/common';
import { iGenericErrorMessage } from '../app/interfaces/error';

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: iGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleZodError;
