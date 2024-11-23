import { model, Schema } from 'mongoose';
import { TOrder } from './orderInterface';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
      match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'],
    },
    product: {
      type: String,
      required: [true, 'Please Provide Product Id'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total Price is required'],
      min: [0, 'Total Price must be a positive number'],
    },
  },
  {
    timestamps: true,
  },
);

export const Order = model<TOrder>('Order', orderSchema);
