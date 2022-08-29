const defaultState = {
  chats: [
    { id: 1, name: "Виктор" },
    { id: 2, name: "Дмитрий" },
    { id: 3, name: "Екатерина" },
    { id: 4, name: "Тимур" },
    { id: 5, name: "Анастасия" },
  ],
};

export const chatReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CHAT":
      return { ...state, chats: [action.payload, ...state.chats] };
    case "DELETE_CHAT":
      return {
        ...state,
        chats: [...state.chats.filter((chat) => chat !== action.payload)],
      };
    default:
      return state;
  }
};
