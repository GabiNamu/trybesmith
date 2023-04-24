import { Router } from 'express';
import userController from '../controllers/user.controller';
import validateUsers from '../middlewares/validateUsers';

const userRouter = Router();
userRouter.post('/users', validateUsers, userController.createuser);
userRouter.post('/login', userController.login);

export default userRouter;