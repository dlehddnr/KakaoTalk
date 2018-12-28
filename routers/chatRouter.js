import express from "express";
import routes from "../routes";
import {
  chat,
  chatDelete,
  chats,
  chatSearch,
  getCreateChat,
  postCreateChat
} from "../controllers/chatController";

const chatRouter = express.Router();

chatRouter.get(routes.chatsHome, chats);
chatRouter.get(routes.chatSearch, chatSearch);

chatRouter.get(routes.createChat, getCreateChat);
chatRouter.post(routes.createChat, postCreateChat);

chatRouter.get(routes.chatDelete, chatDelete);
chatRouter.get(routes.chat(), chat);

export default chatRouter;
