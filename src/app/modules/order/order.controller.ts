import { Request, Response } from 'express';
import { orderServices } from './order.service';

// Order Create
const createOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.orderSaveToDatabase(req.body);
    if (!result) {
      res.status(400).json({
        error: 'Insufficient Stock',
        message: 'This Product Out of Stock! You can not Order This Product!',
        success: false,
      });
    } else {
      res.status(200).json({
        message: 'Order created successfully',
        status: true,
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: 'Somethng Went Wrong',
      status: false,
      error: error,
    });
  }
};

// Order Revenue
const orderRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.calculateRevenueFromOrder();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        totalRevenue: result,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: 'Somethng Went Wrong',
      status: false,
      error: error,
    });
  }
};

export const orderControllers = {
  createOrder,
  orderRevenue,
};
