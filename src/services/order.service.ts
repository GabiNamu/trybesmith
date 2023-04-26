import { Order } from '../interfaces/order.interface';
import orderModel from '../models/order.model';

async function getOrders(): Promise<Order[]> {
  const orders = await orderModel.getOrders();
  return orders;
}

async function createOrder(
  order: { productsIds: number[] }, 
  userId: number,
): Promise<null | { message: string }> {
  await orderModel.createOrder(order, userId);
  return null;
}

export default {
  getOrders,
  createOrder,
};