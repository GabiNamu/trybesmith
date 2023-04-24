import { Router } from 'express';
import productController from '../controllers/product.controller';
import validateProducts from '../middlewares/validateProducts';

const productRouter = Router();
productRouter.post('/', validateProducts, productController.createProduct);
productRouter.get('/', productController.getAll);

export default productRouter;