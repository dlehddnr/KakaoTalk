import express from 'express';
import routes from '../routes';
import { bigImage, profile, chatMe, editProfile } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.profile, profile);
userRouter.get(routes.chatMe, chatMe);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.bigImage, bigImage)

export default userRouter;