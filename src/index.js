import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { msgReducer } from "./store/msgReducer/msgReducer";
import { chatReducer } from "./store/chatReduser/chatReducer";

const store = createStore(
  combineReducers({ messages: msgReducer, chats: chatReducer })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
