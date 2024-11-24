import { Request, Response } from 'express';
import { orderServices } from './order.service';

// Order Create
const createOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.orderSaveToDatabase(req.body);
    if (result === null) {
      res.status(404).json({
        error: 'Product Not Found',
        message: 'Invalid Product Id! We cannot find any Product!',
        status: false,
      });
    } else if (result === false) {
      res.status(400).json({
        error: 'Insufficient Stock',
        message: 'This Product Out of Stock! You can not Order This Product!',
        status: false,
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
