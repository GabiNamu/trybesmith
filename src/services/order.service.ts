import { Order } from '../interfaces/order.interface';
import orderModel from '../models/order.model';
import schema from './validation/schema';

async function getOrders(): Promise<Order[]> {
  const orders = await orderModel.getOrders();
  return orders;
}

async function createOrder(
  order: { productsIds: number[] }, 
  userId: number,
): Promise<null | { message: string }> {
  const { error } = schema.order.validate(order);
  if (error) {
    return { message: error.message };
  }
  await orderModel.createOrder(order, userId);
  return null;
}

export default {
  getOrders,
  createOrder,
};