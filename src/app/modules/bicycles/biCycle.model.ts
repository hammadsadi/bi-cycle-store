import { model, Schema } from 'mongoose';
import { TBiCycle } from './biCycleInterface';

// Create Bi Cycle Schema
const biCycleSchema = new Schema<TBiCycle>(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    model: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
      required: true,
    },
    productDetails: {
      type: String,
      required: true,
    },
    stock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

// Export Model
export const BiCycle = model<TBiCycle>('BiCycle', biCycleSchema);
