import { onValue, ref, set } from "firebase/database";
import { db } from "../../services/firebase";
import * as types from "./actionTypes";

const fetchChatsAction = (chats) => {
  return {
    type: types.FETCH_CHATS,
    payload: chats,
  };
};

export const updateChats = (chats, uid) => {
  const chatsRef = ref(db, `users/${uid}/chats`);
  set(chatsRef, chats);
};

export const fetchChats = (uid) => {
  return (dispatch) => {
    const chatsRef = ref(db, `users/${uid}/chats`);
    onValue(chatsRef, (snapshot) => {
      const chats = snapshot.val() ?? [];
      dispatch(fetchChatsAction(chats));
    });
  };
};

export const deleteChat = (chats, filterVal, uid) => {
  const filteredChats = chats.filter((chat) => chat.id !== filterVal);
  updateChats(filteredChats, uid);
};
