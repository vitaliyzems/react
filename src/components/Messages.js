import React from "react";
import { useSelector } from "react-redux";
import { getMessageList } from "../store/msgReducer/selectors";
import Message from "./Message";

function Messages({ id }) {
  const messages = useSelector(getMessageList);
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
