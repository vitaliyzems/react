import React from "react";
import Message from "./Message";

function Messages({ messageList }) {
  return (
    <div className="messageList">
      {messageList.map((message) => {
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
