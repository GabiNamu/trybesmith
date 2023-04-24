import { Request, Response } from 'express';
import userService from '../services/user.service';

async function createuser(req: Request, res: Response) {
  const newUser = await userService.createuser(req.body);
  res.status(201).json({ token: newUser });
}

export default {
  createuser,
};