import express from "express";
import routes from "../routes";
import {
  home,
  friends,
  find,
  more,
  friendSearch,
  getLogin,
  postLogin,
  getJoin,
  postJoin
} from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.get(routes.home, home);
mainRouter.get(routes.friends, friends);
mainRouter.get(routes.friendSearch, friendSearch);
mainRouter.get(routes.find, find);
mainRouter.get(routes.more, more);

mainRouter.get(routes.login, getLogin);
mainRouter.post(routes.login, postLogin);
mainRouter.get(routes.join, getJoin);
mainRouter.post(routes.join, postJoin);

export default mainRouter;
