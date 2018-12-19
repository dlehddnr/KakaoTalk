import express from 'express';
import routes from '../routes';
import { chat, chatDelete } from '../controllers/chatController';

const chatRouter = express.Router();

chatRouter.get(routes.chat, chat);
chatRouter.get(routes.chatDelete, chatDelete);

export default chatRouter;