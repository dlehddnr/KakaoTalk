export const profile = (req, res) =>
  res.render("profile", { pageTitle: "Profile" });
export const chatMe = (req, res) =>
  res.render("chatMe", { pageTitle: "Chatme" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "EditProfile" });
export const bigImage = (req, res) =>
  res.render("bigImage", { pageTitle: "BigImage" });
