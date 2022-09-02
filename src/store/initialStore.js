import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./postsReduser/postsReduser";

export const store = createStore(reducer, applyMiddleware(thunk));
