import React from "react";
import { useSelector } from "react-redux";
import Message from "./Message";

function Messages({ id }) {
  const messages = useSelector((state) => state.messages.messages);
  const filteredMessages = messages.filter((message) => message.chatId === id);

  return (
    <div className="messageList">
      {filteredMessages.map((message) => {
        return (
          <Message
            key={message.id}
            text={message.text}
            author={message.author}
          />
        );
      })}
    </div>
  );
}

export default Messages;
