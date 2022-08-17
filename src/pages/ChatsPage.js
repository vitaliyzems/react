import React from "react";
import ChatList from "../components/ChatList";

function ChatsPage({ chatList, setChatList }) {
  return (
    <>
      <div className="container">
        <ChatList chatList={chatList} setChatList={setChatList} />
      </div>
    </>
  );
}

export default ChatsPage;
