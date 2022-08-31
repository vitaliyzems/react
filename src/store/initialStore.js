import { applyMiddleware, combineReducers, createStore } from "redux";
import { msgReducer } from "./msgReducer/msgReducer";
import { chatReducer } from "./chatReduser/chatReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
};

const setDelay = (store) => (next) => (action) => {
  if (action.type === "DELETE_CHAT") {
    return setTimeout(() => next(action), 1000);
  }
  return next(action);
};

const reducer = combineReducers({ messages: msgReducer, chats: chatReducer });

const persistedReduser = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReduser,
  applyMiddleware(setDelay, logger)
);

export const persist = persistStore(store);
