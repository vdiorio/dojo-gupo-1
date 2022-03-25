import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';
import connection from './connection';

export default class UserModel {
  constructor(connection: Pool) {}

  public async getAll(): Promise<IUser[]> {
    const [USERS] = await connection.execute('SELECT * FROM user_api.users;');
    return USERS as IUser[];
  }

  public async getById(id: number): Promise<IUser[]> {
    const [USER] = await connection.execute('SELECT * FROM user_api.users WHERE id = ?;', [id]);
    return USER as IUser[];
  }

  public async createUser(user: IUser): Promise<IUser> {
    const { user_name, email, password } = user;
    const [USER] = await connection.execute<ResultSetHeader>(`
    INSERT INTO users(user_name, email, password)
    Values(?, ?, ?);`, [user_name, email, password]);
    const returnable = { ...user, id: USER.insertId }
    return returnable as IUser;
  }

  public async editUser(user: IUser): Promise<IUser> {
    const { user_name, email, password, id } = user;
    await connection.execute(`
    UPDATE users SET user_name = ?, email = ?, password = ? WHERE id = ?;`, [user_name, email, password, id]);
    const CONFIA = { ...user }
    return CONFIA as IUser;
  }

  public async deleteUser(id: number): Promise<IUser[]> {
    const [USER] = await connection.execute('DELETE FROM user_api.users WHERE id = ?;', [id]);
    return USER as IUser[];
  }
}
