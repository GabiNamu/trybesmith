import { ResultSetHeader } from 'mysql2';
import { User } from '../interfaces/user.interface';
import connection from './connection';
import { Login } from '../interfaces/login.interface';

async function createuser(user: User): Promise<User> {
  const { username, vocation, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const { insertId: id } = result;

  const newUser: User = { id, ...user };
  return newUser;
}

async function getUser(user: Login): Promise<User | undefined> {
  const [data] = await connection.execute(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [user.username],
  );
  const [userObj] = data as User[];
  return userObj as User | undefined;
}

export default {
  createuser,
  getUser,
};