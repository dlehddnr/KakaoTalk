// Main
//HOME 화면은 화면크기를 맞춰달라는 문구를 띄우자.

const HOME = '/';
const FRIENDS = '/friends';
const CHATS = '/chats';
const FIND = '/find';
const MORE = '/more';

// Chat
// 각각의 채팅방별 아이디가 있어야할듯

const CHAT = '/:id';
const CHAT_DELETE = '/:id/delete'


// User

const PROFILE = '/profile';
const CHAT_ME = '/chat-me';
const EDIT_PROFILE = '/edit-profile';
const BIG_IMAGE = '/big-image';

const routes = {
    home : HOME,
    friends : FRIENDS,
    chats : CHATS,
    find : FIND,
    more : MORE,

    chat : CHAT,
    chatDelete : CHAT_DELETE,

    profile : PROFILE,
    chatMe : CHAT_ME,
    editProfile : EDIT_PROFILE,
    bigImage : BIG_IMAGE

};

export default routes;