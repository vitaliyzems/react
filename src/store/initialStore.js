import { applyMiddleware, combineReducers, createStore } from "redux";
import { msgReducer } from "./msgReducer/msgReducer";
import { chatReducer } from "./chatReduser/chatReducer";
import thunk from "redux-thunk";
import { profileReducer } from "./profileReducer/profileReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const reducer = combineReducers({
  messages: msgReducer,
  chats: chatReducer,
  profile: profileReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
