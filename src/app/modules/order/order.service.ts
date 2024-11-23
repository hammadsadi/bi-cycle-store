import { BiCycle } from '../bicycles/biCycle.model';
import { Order } from './order.model';
import { TOrder } from './orderInterface';

// Order Save to database
const orderSaveToDatabase = async (data: TOrder) => {
  // Reduce Quantity
  const inStockCheck = await BiCycle.findById(data.product);
  // Check Stock Status
  if (!inStockCheck?.inStock) {
    return false;
  }
  // Update stock Status When Quantity Zero
  if (inStockCheck.quantity === 0) {
    inStockCheck.inStock = false;
    await inStockCheck.save();
    return false;
  } else {
    // reduce Quantity
    inStockCheck.quantity = inStockCheck.quantity - data.quantity;
    await inStockCheck.save();
    // Create Order
    const result = await Order.create(data);
    return result;
  }
};

// Order Save to database
const calculateRevenueFromOrder = async () => {
  const result = await Order.aggregate([
    // Stage 1
    { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
  ]);
  return result[0].totalRevenue;
};

export const orderServices = {
  orderSaveToDatabase,
  calculateRevenueFromOrder,
};
