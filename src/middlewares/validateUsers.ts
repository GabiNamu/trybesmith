import { NextFunction, Request, Response } from 'express';
import schema from '../utils/validation/schema';

async function validateUsers(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.user.validate(req.body);
  if (error) {
    return res.status(error.message.includes('required') ? 400 : 422)
      .json({ message: error.message });
  }
  next();
}

export default validateUsers;