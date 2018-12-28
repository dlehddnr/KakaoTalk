import { chatsList, friendsList } from "../db";
import routes from "../routes";

export const chats = (req, res) =>
  res.render("chats", { pageTitle: "Chats", chatsList });
export const chat = (req, res) => res.render("chat", { pageTitle: "Chat" });
export const chatDelete = (req, res) =>
  res.render("chatDelete", { pageTitle: "ChatDelete" });
export const chatSearch = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("chatSearch", { pageTitle: Search, searchingBy });
};

export const getCreateChat = (req, res) =>
  res.render("createChat", { pageTitle: "Create Chat" });
export const postCreateChat = (req, res) => {
  const {
    body: { file, name, message }
  } = req;
  // To Do : Create and Save Chat
  res.redirect(routes.chat(3333));
};
