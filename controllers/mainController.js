export const home = (req, res) => res.render('home', { pageTitle: 'Home'});
export const friends = (req, res) => res.render('friends', { pageTitle: 'Friends'});
export const chats = (req, res) => res.render('chats', { pageTitle: 'Chats'});
export const find = (req, res) => res.render('find', { pageTitle: 'Find'});
export const more = (req, res) => res.render('more', { pageTitle: 'More'});