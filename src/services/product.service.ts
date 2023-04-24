import { Product } from '../interfaces/product.interface';
import productModel from '../models/product.model';

async function createProduct(product: Product): Promise<Product> {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
}

async function getAll(): Promise<Product[]> {
  const products = await productModel.getAll();
  return products;
}

export default {
  createProduct,
  getAll,
};