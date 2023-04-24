import { Order } from '../interfaces/order.interface';
import orderModel from '../models/order.model';

async function getOrders(): Promise<Order[]> {
  const orders = await orderModel.getOrders();
  return orders;
}

export default {
  getOrders,
};