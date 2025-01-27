import { z } from 'zod';

const createOrderValidationSchema = z.object({
  body: z.object({
    user: z.string({ required_error: 'This Field is Required' }),
    products: z.array(
      z.object({
        product: z.string().refine((val) => val.match(/^[0-9a-fA-F]{24}$/), {
          message: 'Invalid ObjectId format for product',
        }),
        quantity: z
          .number()
          .int()
          .positive('Quantity must be a positive integer'),
      }),
    ),
  }),
});

export const OrderValidationSchemas = {
  createOrderValidationSchema,
};
