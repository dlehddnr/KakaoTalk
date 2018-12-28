import { chatsList, friendsList } from "../db";
import routes from "../routes";

export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const friends = (req, res) =>
  res.render("friends", { pageTitle: "Friends", friendsList });
export const find = (req, res) => res.render("find", { pageTitle: "Find" });
export const more = (req, res) => res.render("more", { pageTitle: "More" });

export const logout = (req, res) => {
  // To Do : Process Log Out
  res.redirect(routes.home);
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  res.redirect(routes.friends);
};

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.friends);
    // Register User
  }
};

export const friendSearch = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("friendSearch", { pageTitle: "Friend Search", searchingBy });
};
