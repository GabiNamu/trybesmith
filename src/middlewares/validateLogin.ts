import { NextFunction, Request, Response } from 'express';
import schema from '../utils/validation/schema';

async function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.login.validate(req.body);
  if (error) {
    return res.status(400)
      .json({ message: error.message });
  }
  next();
}

export default validateLogin;