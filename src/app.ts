import express from 'express';
import productRouter from './routers/product.router';
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use(userRouter);
app.use('/orders', orderRouter);

export default app;
