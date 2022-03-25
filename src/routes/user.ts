import { Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

const userController = new UserController();

router.get(
  '/',
  async (req, res) =>
    await userController.getAll(req, res),
);

router.get(
  '/:id',
  async (req, res) =>
    await userController.getById(req, res),
);

router.post(
  '/',
  async (req, res) =>
    await userController.createUser(req, res),
);

router.put(
  '/:id',
  async (req, res) =>
    await userController.editUser(req, res),
);

router.delete(
  '/:id',
  async (req, res) =>
    await userController.deleteUser(req, res),
);

export default router;
