import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import ChatsPage from "../pages/ChatsPage.js";
import ProfilePage from "../pages/ProfilePage.js";
import Layout from "./Layout.jsx";
import SingleChatPage from "../pages/SingleChatPage.jsx";
import NotFoundPage from "../pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/chats/:id" element={<SingleChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
