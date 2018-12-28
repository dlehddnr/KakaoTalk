// Friends

const HOME = "/";
const LOGIN = "/login";
const JOIN = "/join";
const FRIENDS = "/friends";
const FRINED_SEACH = "/friend-search";
const FIND = "/find";
const MORE = "/more";

// Chats
// 각각의 채팅방별 아이디가 있어야할듯

const CHATS = "/chats";
const CHATS_HOME = "/";
const CHAT_SEARCH = "/chat-search";
const CHAT = "/:id";
const CHAT_DELETE = "/chat-delete";
const CREATE_CHAT = "/create-chat";

// Search

// User

const PROFILE = "/profile";
const CHAT_ME = "/chat-me";
const EDIT_PROFILE = "/edit-profile";
const BIG_IMAGE = "/big-image";

const routes = {
  home: HOME,
  friends: FRIENDS,
  chats: CHATS,
  find: FIND,
  more: MORE,
  friendSearch: FRINED_SEACH,
  login: LOGIN,
  join: JOIN,

  chat: id => {
    if (id) {
      return `/chats/${id}`;
    } else {
      return CHAT;
    }
  },
  chatsHome: CHATS_HOME,
  chatDelete: CHAT_DELETE,
  chatSearch: CHAT_SEARCH,
  createChat: CREATE_CHAT,

  profile: PROFILE,
  chatMe: CHAT_ME,
  editProfile: EDIT_PROFILE,
  bigImage: BIG_IMAGE
};

export default routes;
