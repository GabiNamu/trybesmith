import { Product } from '../interfaces/product.interface';
import productModel from '../models/product.model';

async function createProduct(product: Product): Promise<Product> {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
}

export default {
  createProduct,
};