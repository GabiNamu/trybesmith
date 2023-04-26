import { Router } from 'express';
import userController from '../controllers/user.controller';
import validateUsers from '../middlewares/validateUsers';
import validateLogin from '../middlewares/validateLogin';

const userRouter = Router();
userRouter.post('/users', validateUsers, userController.createuser);
userRouter.post('/login', validateLogin, userController.login);

export default userRouter;