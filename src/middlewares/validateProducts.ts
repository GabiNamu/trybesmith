import { NextFunction, Request, Response } from 'express';
import schema from '../utils/validation/schema';

async function validateProducts(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.product.validate(req.body);
  if (error) {
    return res.status(error.message.includes('required') ? 400 : 422)
      .json({ message: error.message });
  }
  next();
}

export default validateProducts;