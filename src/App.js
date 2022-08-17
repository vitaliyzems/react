import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import ChatsPage from "./pages/ChatsPage.js";
import ProfilePage from "./pages/ProfilePage.js";
import Layout from "./components/Layout.jsx";
import SingleChatPage from "./pages/SingleChatPage.jsx";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  let [chatList, setChatList] = useState([
    { id: 1, name: "Виктор" },
    { id: 2, name: "Дмитрий" },
    { id: 3, name: "Екатерина" },
    { id: 4, name: "Тимур" },
    { id: 5, name: "Анастасия" },
  ]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/chats"
            element={
              <ChatsPage chatList={chatList} setChatList={setChatList} />
            }
          />
          <Route
            path="/chats/:id"
            element={<SingleChatPage chatList={chatList} />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
