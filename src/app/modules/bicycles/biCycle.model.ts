import mongoose, { model, Schema } from "mongoose";
import { TBiCycle } from "./biCycleInterface";

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
    type: {
      type: String,
      enum: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const BiCycle = model<TBiCycle>("BiCycle", biCycleSchema);
