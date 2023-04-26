import { ResultSetHeader } from 'mysql2';
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

async function createOrder(order: { productsIds: number[] }, userId: number): Promise<void> {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [userId],
  );
  const { insertId: id } = result;

  await Promise.all(order.productsIds.map(async (p) => {
    await connection.execute(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [id, p],
    );
  }));
}

export default {
  getOrders,
  createOrder,
};