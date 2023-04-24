import { ResultSetHeader } from 'mysql2';
import { Product } from '../interfaces/product.interface';
import connection from './connection';

async function createProduct(product: Product): Promise<Product> {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const { insertId: id } = result;

  const newProduct: Product = { id, ...product };
  return newProduct;
}

export default {
  createProduct,
};