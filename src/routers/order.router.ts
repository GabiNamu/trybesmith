import { Router } from 'express';
import orderController from '../controllers/order.controller';
import validateOrders from '../middlewares/validateOrders';
import validateToken from '../middlewares/validateToken';

const orderRouter = Router();
orderRouter.get('/', orderController.getOrders);
orderRouter.post('/', validateToken, validateOrders, orderController.createOrder);

export default orderRouter;