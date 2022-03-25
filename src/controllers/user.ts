import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserService } from '../services';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const USERS = await this.userService.getAll();
    return res.status(StatusCodes.OK).json(USERS);
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const [USERS] = await this.userService.getById(Number(id));
    return res.status(StatusCodes.OK).json(USERS);
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    const { user_name, email, password } = req.body;
    const USERS = await this.userService.createUser({ user_name, email, password });
    return res.status(StatusCodes.CREATED).json(USERS);
  }

  public async editUser(req: Request, res: Response): Promise<Response> {
    const { user_name, email, password } = req.body;
    const { id } = req.params
    const USERS = await this.userService.editUser({ user_name, email, password, id: Number(id) });
    return res.status(StatusCodes.OK).json(USERS);
  }

  public async deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await this.userService.deleteUser(Number(id));
    return res.status(StatusCodes.NO_CONTENT).end();
  }
}
