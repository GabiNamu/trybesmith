import { User } from '../interfaces/user.interface';
import userModel from '../models/user.model';
import jwtConfig from '../utils/jwtConfig';

async function createuser(user: User): Promise<string> {
  const newUser = await userModel.createuser(user);
  const token = jwtConfig.createTokenJWT(newUser);
  return token;
}

export default {
  createuser,
};