import { model, Schema } from 'mongoose';
import { TBiCycle } from './biCycleInterface';

// Create Bi Cycle Schema
const biCycleSchema = new Schema<TBiCycle>(
  {
    name: {
      type: String,
      required: [true, 'Please Provide a Bi-Cycle Name'],
    },
    brand: {
      type: String,
      required: [true, 'Please Provide a Brand Name'],
    },
    price: {
      type: Number,
      required: [true, 'Please add  Bicycle Price'],
      min: [0, 'Price must be a positive number'],
    },
    type: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
        message:
          '{VALUE} is not a valid Type. Please Select One of the following: Road, Hybrid, BMX, Electric',
      },
      required: [true, 'This field is Required Please Provide a Valid Type'],
    },
    description: {
      type: String,
      required: [true, 'Please add A brief description of the bicycle.'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please Provide Quantity of the bicycle available.'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'Provide Bi Cycle Stock Status'],
    },
  },
  {
    timestamps: true,
  },
);

// Export Model
export const BiCycle = model<TBiCycle>('BiCycle', biCycleSchema);
