import { IUser } from '../interfaces';
import { UserModel } from '../models';
import connection from '../models/connection';

export default class UserService {
  public _model: UserModel;
  constructor() {
    this._model = new UserModel(connection);
  }

  public async getAll(): Promise<IUser[]> {
    const USERS = await this._model.getAll();
    return USERS;
  }

  public async getById(id: number): Promise<IUser[]> {
    const USERS = await this._model.getById(id);
    return USERS;
  }

  public async createUser(user: IUser): Promise<IUser> {
    const USERS = await this._model.createUser(user);
    return USERS;
  }

  public async editUser(user: IUser): Promise<IUser> {
    const USERS = await this._model.editUser(user);
    return USERS;
  }

  public async deleteUser(id: number): Promise<IUser[]> {
    const USERS = await this._model.deleteUser(id);
    return USERS;
  }
}
