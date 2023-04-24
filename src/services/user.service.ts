import { Login } from '../interfaces/login.interface';
import { User } from '../interfaces/user.interface';
import userModel from '../models/user.model';
import jwtConfig from '../utils/jwtConfig';
import schema from './validation/schema';

async function createuser(user: User): Promise<string> {
  const newUser = await userModel.createuser(user);
  const token = jwtConfig.createTokenJWT(newUser);
  return token;
}

async function login(user: Login): Promise<string | { message: string, status: number }> {
  const { error } = schema.login.validate(user);
  if (error) return { message: error.message, status: 400 };
  const data = await userModel.getUser(user);
  if (!data || data.password !== user.password) {
    return { message: 'Username or password invalid', status: 401 };
  }
  const token = jwtConfig.createTokenJWT({ id: data.id, username: data.username });
  return token;
}

export default {
  createuser,
  login,
};