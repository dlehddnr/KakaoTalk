import express from 'express';
import routes from '../routes';
import { home, friends, chats, find, more } from '../controllers/mainController';

const mainRouter = express.Router();

mainRouter.get(routes.home, home);
mainRouter.get(routes.friends, friends);
mainRouter.get(routes.chats, chats);
mainRouter.get(routes.find, find);
mainRouter.get(routes.more, more);

export default mainRouter;