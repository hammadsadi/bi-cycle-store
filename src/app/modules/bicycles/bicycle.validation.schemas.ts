import { z } from 'zod';
import { BicycleCategory } from './bicycle.constant';

const createBicycleValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Please Provide a Bi-Cycle Name' }),
    brand: z.string({ required_error: 'Please Provide a Brand Name' }),
    price: z.number({ required_error: 'Please Provide Bi-Cycle Price' }).min(0),
    model: z.string({ required_error: 'Please Provide Bi-Cycle Model' }),
    stock: z.number({ required_error: 'Please Provide Stock' }),
    productDetails: z.string({
      required_error: 'Please Provide Bi-Cycle Model',
    }),
    category: z.enum([...BicycleCategory] as [string, ...string[]]),
    image: z.string().optional(),
  }),
});

const updateBicycleValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: 'Please Provide a Bi-Cycle Name' })
      .optional(),
    brand: z
      .string({ required_error: 'Please Provide a Brand Name' })
      .optional(),
    price: z
      .number({ required_error: 'Please Provide Bi-Cycle Price' })
      .min(0)
      .optional(),
    model: z
      .string({ required_error: 'Please Provide Bi-Cycle Model' })
      .optional(),
    stock: z.number({ required_error: 'Please Provide Stock' }).optional(),
    image: z.string().optional(),
  }),
});

export const BicycleValidationSchemas = {
  createBicycleValidationSchema,
  updateBicycleValidationSchema,
};
