import { Request, Response } from 'express';
import orderModel from '../models/order.model';

async function getOrders(req: Request, res: Response) {
  const orders = await orderModel.getOrders();
  return res.status(200).json(orders);
}

export default {
  getOrders,
};