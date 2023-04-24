import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from '../interfaces/user.interface';

function createTokenJWT(payload: User) {
  const secret: string = process.env.JWT_SECRET || 'secret';
  const config: SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, config);
  return token;
}

export default {
  createTokenJWT,
};