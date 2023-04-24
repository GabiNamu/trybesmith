import { Order } from '../interfaces/order.interface';
import connection from './connection';

async function getOrders(): Promise<Order[]> {
  const [orders] = await connection.execute(
    `SELECT o.id as id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds 
    FROM Trybesmith.orders AS o 
    INNER JOIN Trybesmith.products AS p ON o.id = p.order_id
    GROUP BY o.id`,
  );

  return orders as Order[];
}

export default {
  getOrders,
};