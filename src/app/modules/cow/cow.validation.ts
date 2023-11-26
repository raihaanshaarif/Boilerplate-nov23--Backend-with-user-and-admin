import { z } from 'zod';
import { breed, category, label, location } from './cow.conostant';

const createCowZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is Required',
    }),
    age: z.number({
      required_error: 'Age Required',
    }),
    price: z.number({ required_error: 'Price is required' }).default(0),
    location: z.enum([...location] as [string, ...string[]], {
      required_error: 'Location is required',
    }),
    breed: z.enum([...breed] as [string, ...string[]], {
      required_error: 'Breed is required',
    }),

    weight: z.number(),
    label: z.enum([...label] as [string, ...string[]], {
      required_error: 'Label is required',
    }),
    category: z.enum([...category] as [string, ...string[]], {
      required_error: 'Category is required',
    }),

    seller: z.string(), // assuming seller is a string representation of ObjectId
  }),
});

const updateCowZodSchema = z.object({
  body: z
    .object({
      name: z
        .string({
          required_error: 'Name is Required',
        })
        .optional(),
      age: z
        .number({
          required_error: 'Age Required',
        })
        .optional(),
      price: z
        .number({ required_error: 'Price is required' })
        .default(0)
        .optional(),
      location: z
        .enum([...location] as [string, ...string[]], {
          required_error: 'Location is required',
        })
        .optional(),
      breed: z
        .enum([...breed] as [string, ...string[]], {
          required_error: 'Breed is required',
        })
        .optional(),
      weight: z.number().optional(),
      label: z
        .enum([...label] as [string, ...string[]], {
          required_error: 'Label is required',
        })
        .optional(),
      category: z
        .enum([...category] as [string, ...string[]], {
          required_error: 'Category is required',
        })
        .optional(),
      seller: z.string().optional(), // assuming seller is a string representation of ObjectId
    })
    .partial(),
});

export const CowValidation = {
  createCowZodSchema,
  updateCowZodSchema,
};
