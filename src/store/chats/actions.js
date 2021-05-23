export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';

export const addChat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat,
});

export const deleteChat = (chatId) => ({
  type: DELETE_CHAT,
  chatId,
});