import { z } from 'zod';

export const OrderZodSchema = z.object({
  cow: z.string().nonempty('Cow ID is required'),
  buyer: z.string().nonempty('Buyer ID is required'),
});
