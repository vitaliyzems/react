import * as types from "./actionTypes";

const defaultState = {
  chats: [],
};

export const chatReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_CHATS:
      return { ...state, chats: action.payload || [] };
    default:
      return state;
  }
};
