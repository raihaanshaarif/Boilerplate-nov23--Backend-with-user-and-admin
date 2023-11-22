import { z } from 'zod';
import { role } from './user.constant';

const createAdminZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    name: z.object({
      firstName: z.string({
        required_error: 'First name is required',
      }),
      lastName: z.string({
        required_error: 'Last name is required',
      }),
    }),
    phoneNumber: z.string({
      required_error: 'Phone No number is required',
    }),
    role: z.enum([...role] as [string, ...string[]]).optional(),

    address: z.string({
      required_error: 'Address is required',
    }),
    budget: z.number({
      required_error: 'Budget is required',
    }),
    income: z
      .number({
        required_error: 'Income is required',
      })
      .optional(),
  }),
});

const updateAdminZodSchema = z.object({
  body: z
    .object({
      password: z.string().optional(),
      name: z
        .object({
          firstName: z.string().optional(),
          lastName: z.string().optional(),
        })
        .optional(),
      phoneNumber: z.string().optional(),
      role: z.enum([...role] as [string, ...string[]]).optional(),
      address: z.string().optional(),
      budget: z.number().optional(),
      income: z.number().optional(),
    })
    .optional(),
});

export const UserValidation = {
  createAdminZodSchema,
  updateAdminZodSchema,
};
