import { Request, Response } from 'express';
import orderService from '../services/order.service';
import { IToken } from '../interfaces/token.interface';

interface RequestWithUserRole extends Request {
  user?: IToken,
}

async function getOrders(req: Request, res: Response) {
  const orders = await orderService.getOrders();
  return res.status(200).json(orders);
}

async function createOrder(req: RequestWithUserRole, res: Response) {
  if (req.user !== undefined) {
    await orderService.createOrder(req.body, Number(req.user.id));
    return res.status(201).json({ userId: Number(req.user.id), productsIds: req.body.productsIds });
  }
}

export default {
  getOrders,
  createOrder,
};