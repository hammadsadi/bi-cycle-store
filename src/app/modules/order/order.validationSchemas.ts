import { z } from 'zod';

// Create Order Validation Schema
const createOrderValidationSchema = z.object({
  body: z.object({
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

const updateOrderValidationSchema = z.object({
  body: z.object({
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
  updateOrderValidationSchema,
};
